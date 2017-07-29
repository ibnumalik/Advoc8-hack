(function() {
  'use strict';

  // Usage:
  //
  // Creates:
  //

  angular
    .module('app.layout')
    .component('homeFooter', {
      templateUrl: 'app/layout/home-footer.html',
      controller: HomeFooterController,
      controllerAs: '$ctrl',
      bindings: {
        Binding: '=',
      },
    });

  HomeFooterController.$inject = [];
  function HomeFooterController() {
    var $ctrl = this;


    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestroy = function() { };
  }
})();
