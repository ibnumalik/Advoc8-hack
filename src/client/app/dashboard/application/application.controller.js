(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['ApplicationService'];
  function ApplicationController(ApplicationService) {
    var vm = this;
    vm.details = {};

    vm.updateApplication = updateApplication;

    activate();

    ////////////////

    function activate() {
      // updateForm();
     }

     function updateForm() {
       ApplicationService.updateApplication()
        .then(function (response) {
          var data = response.data;
          vm.details = {
            'type': data.type,
            'first_name': data.first_name,
            'last_name': data.last_name,
            'gender': data.gender,
            'marital_status': data.marital_status,
            'occupation': data.occupation,
            'purpose': data.purpose,
            'bio': data.bio,
            'contact_number': data.contact_number,
            'country': data.country,
            'address': data.address,
            'state': data.state,
          }
        });
     }

    function updateApplication(details) {
      console.log(details);
      ApplicationService.updateApplication(details)
        .then(function (response) {
          console.log(response);
        })
    }
  }
})();
