(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['ProfileService'];
  function DashboardController(ProfileService) {
    var vm = this;

    activate();

    ////////////////

    function activate() { }
  }
})();
