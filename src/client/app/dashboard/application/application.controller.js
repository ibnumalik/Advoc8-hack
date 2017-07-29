(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['ApplicationService'];
  function ApplicationController(ApplicationService) {
    var vm = this;


    activate();

    ////////////////

    function activate() { }
  }
})();
