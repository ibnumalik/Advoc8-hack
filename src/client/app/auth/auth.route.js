(function() {
  'use strict';

  angular
    .module('app.auth')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'signup',
        config: {
          url: '/signup',
          templateUrl: 'app/auth/signup.html',
          controller: 'AuthController',
          controllerAs: 'vm',
          title: 'signup'
        }
      },
      {
        state: 'signin',
        config: {
          url: '/signin',
          templateUrl: 'app/auth/signin.html',
          controller: 'AuthController',
          controllerAs: 'vm',
          title: 'signin'
        }
      }
    ];
  }
})();
