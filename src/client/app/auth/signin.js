(function() {
  'use strict';

  angular
    .module('app.auth')
    .component('signin', {
      controller: SigninController,
      controllerAs: 'vm',
      templateUrl: 'app/auth/signin.html',
      bindings:{}
    });

  SigninController.$inject = ['AuthService', '$state', '$window'];

  function SigninController(AuthService, $state, $window) {
    const vm = this;
    vm.signin = signin;

    //////////////////
    vm.$onInit = function() {}
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
