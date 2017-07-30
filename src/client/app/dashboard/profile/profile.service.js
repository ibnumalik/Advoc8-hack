(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .factory('ProfileService', ProfileService);

  ProfileService.$inject = ['$http'];
  function ProfileService($http) {
    var service = {
      getProfiles: getProfiles
    };

    return service;

    ////////////////
    function getProfiles() {
      return $http.get('https://0f80a679.ngrok.io/api/load/maid')
        .then(function (response) {
          return response.data;
        })
    }
  }
})();
