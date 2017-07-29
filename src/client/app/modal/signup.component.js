(function() {
  'use strict';

  angular
    .module('app.modal')
    .component('signupModal', {
      templateUrl: 'app/modal/signup.html',
      controller: signUpController,
      controllerAs: '$ctrl',
      bindings: {}
    });

  signUpController.$inject = [];
  function signUpController() {
    var $ctrl = this;


    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestroy = function() { };
  }
})();
