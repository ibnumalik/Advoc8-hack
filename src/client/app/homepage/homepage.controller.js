(function() {
  'use strict';

  angular
    .module('app.homepage')
    .controller('HomepageController', HomepageController);

  HomepageController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function HomepageController($q, dataservice, logger) {
    var vm = this;

    activate();

    function activate() {
    }

  }
})();
