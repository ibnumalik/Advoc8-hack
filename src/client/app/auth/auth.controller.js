(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['AuthService'];
  function AuthController(AuthService) {
    var vm = this;

    vm.details = {};

    vm.signup = signup;

    activate();

    ////////////////

    function activate() { }

    function signup() {
      AuthService.signup(vm.details)
        .then(function (response) {
          console.log(response);
        })
    }
  }
})();
