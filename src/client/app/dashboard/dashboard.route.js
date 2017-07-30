(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'dashboard',
        config: {
          url: '/dashboard',
          abstract: true,
          templateUrl: 'app/dashboard/dashboard.html',
          title: 'dashboard'
        }
      },
      {
        state: 'dashboard.profile',
        config: {
          url: '/profile',
          parent: 'dashboard',
          templateUrl: 'app/dashboard/profile/profile.html',
          controller: 'ProfileController',
          controllerAs: 'vm',
          title: 'dashboard-profile'
        }
      },
      {
        state: 'dashboard.application',
        config: {
          url: '/application',
          parent: 'dashboard',
          templateUrl: 'app/dashboard/application/application.html',
          controller: 'ApplicationController',
          controllerAs: 'vm',
          title: 'dashboard-application'
        }
      },
      {
        state: 'dashboard.search',
        config: {
          url: '/search',
          parent: 'dashboard',
          templateUrl: 'app/dashboard/search/search.html',
          controller: 'SearchController',
          controllerAs: 'vm',
          title: 'dashboard-search'
        }
      }
    ];
  }
})();
