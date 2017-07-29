(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('AuthService', AuthService);

  AuthService.$inject = ['$http', '$httpParamSerializerJQLike'];
  function AuthService($http, $httpParamSerializerJQLike) {
    var config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    var service = {
      signup: signup,
      signin: signin,
    };

    return service;

    ////////////////
    function signup(details) {
      return $http.post('https://0f80a679.ngrok.io/api/join', $httpParamSerializerJQLike(details), config)
        .then(function (response) {
          return response.data;
        })
     }

    function signin(details) {
       return $http.post('https://0f80a679.ngrok.io/api/auth/login', $httpParamSerializerJQLike(details), config)
        .then(function (response) {
          return response.data;
        })
     }
  }
})();
