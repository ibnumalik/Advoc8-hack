(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .factory('ProfileService', ProfileService);

  ProfileService.$inject = ['$http'];
  function ProfileService($http) {
    var service = {
      getProfile: getProfile
    };

    return service;

    ////////////////
    function getProfile() { }
  }
})();
