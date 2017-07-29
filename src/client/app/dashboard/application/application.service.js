(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .factory('ApplicationService', ApplicationService);

  ApplicationService.$inject = ['$http'];
  function ApplicationService($http) {
    var service = {
      updateApplication: updateApplication
    };

    return service;

    ////////////////
    function updateApplication() { }
  }
})();
