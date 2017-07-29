(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['ProfileService'];
  function ProfileController(ProfileService) {
    var vm = this;


    activate();

    ////////////////

    function activate() { }
  }
})();
