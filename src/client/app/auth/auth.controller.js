(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('AuthController', AuthController);

  AuthController.$inject = ['AuthService', '$state', '$window'];
  function AuthController(AuthService, $state, $window) {
    var vm = this;

    vm.details = {};

    vm.signup = signup;
    vm.signin = signin;

    activate();

    ////////////////

    function activate() { }

    function signup(details) {
      console.log(details);
      AuthService.signup(details)
        .then(function (response) {
          console.log(response);
          if (response.status === 'success') {
            $state.go('signin');
          }
        })
    }

    function signin(details) {
      AuthService.signin(details)
        .then(function (response) {
          if (response.status === 'success') {
            $window.localStorage.setItem('access_token', response.data.access_token);
            $state.go('dashboard.profile');
          }
        })
    }
  }
})();
