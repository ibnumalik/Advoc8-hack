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
          template: '<signup></signup>',
          title: 'signup'
        }
      },
      {
        state: 'signin',
        config: {
          url: '/signin',
          template: '<signin></signin>',
          title: 'signin'
        }
      }
    ];
  }
})();
