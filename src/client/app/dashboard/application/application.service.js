(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .factory('ApplicationService', ApplicationService);

  ApplicationService.$inject = ['$http', '$httpParamSerializerJQLike', '$window'];
  function ApplicationService($http, $httpParamSerializerJQLike, $window) {
    var config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': $window.localStorage.getItem('access_token')
      }
    }
    var service = {
      updateApplication: updateApplication
    };

    return service;

    ////////////////
    function updateApplication(details) {
      return $http.post('https://0f80a679.ngrok.io/api/user/application/update', $httpParamSerializerJQLike(details), config )
        .then(function (response) {
          return response.data;
        });
     }
  }
})();
