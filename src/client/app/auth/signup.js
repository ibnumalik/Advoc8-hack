(function() {
  'use strict';

  angular
    .module('app.auth')
    .component('signup', {
      controller: SignupController,
      controllerAs: 'vm',
      templateUrl: 'app/auth/signup.html',
      bindings:{}
    });

  SignupController.$inject = ['AuthService', '$state'];

  function SignupController(AuthService, $state) {
    const vm = this;
    vm.signup = signup;

    //////////////////
    vm.$onInit = function() {}
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
  }
})();
