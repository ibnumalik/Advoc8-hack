(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['ApplicationService'];
  function ProfileController(ApplicationService) {
    var vm = this;

    vm.updateProfile = updateProfile;
    vm.details = {
      user: {}
    };

    activate();

    ////////////////

    function activate() {
      // ApplicationService.updateApplication()
      //   .then(function (response) {
      //     updateForm(response.data)
      //   })
    }

    function updateForm(details) {
      // vm.details.user.name = details.user.name;
      // vm.details.user.email = details.user.email;
      // console.log(details);
    }
    function updateProfile(details) {
      ApplicationService.updateApplication(details)
        .then(function (response) {
          updateForm(response.data)
        })
    }
  }
})();
