(function() {
  'use strict';

  angular
    .module('app.homepage')
    .component('homepage', {
      controller: HomepageController,
      controllerAs: 'vm',
      templateUrl: 'app/homepage/homepage.html',
      bindings:{}
    });

  HomepageController.$inject = [];

  function HomepageController() {
    const vm = this;

    //////////////////
    vm.$onInit = function() {}
  }
})();
