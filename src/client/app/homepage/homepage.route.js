(function() {
  'use strict';

  angular
    .module('app.homepage')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'homepage',
        config: {
          url: '/',
          template: '<homepage></homepage>',
          title: 'homepage'
        }
      }
    ];
  }
})();
