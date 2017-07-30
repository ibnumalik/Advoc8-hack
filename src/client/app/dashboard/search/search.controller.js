(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('SearchController', SearchController);

  SearchController.$inject = ['ProfileService', '$uibModal', 'ngDialog'];
  function SearchController(ProfileService, $uibModal, ngDialog) {
    var vm = this;

    vm.hire = hire;

    activate();

    ////////////////

    function activate() {
      ProfileService.getProfiles()
        .then(function (response) {
          console.log(response);
          vm.maids = response.data;
        })
    }

    function hire(event) {
      /* console.log(event);
      $state.go('thankyou'); */
      ngDialog.open({
        template: '<h1>Thank you for your interest in hiring this maid. We will get back to you shortly to arrange an interview with the maid.</h1>',
        plain: true
      });
    }
  }
})();
