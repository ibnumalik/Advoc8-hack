(function() {
  'use strict';

  angular
    .module('app.layout')
    .component('app', {
      templateUrl:'app/layout/app.html',
      controller: AppController,
      controllerAs: '$ctrl',
      bindings: {}
    });

  AppController.$inject = [];
  function AppController() {
    var $ctrl = this;
    $ctrl.title = 'Advoc8 Hack'


    ////////////////

    $ctrl.$onInit = function() { };
    $ctrl.$onChanges = function(changesObj) { };
    $ctrl.$onDestroy = function() { };
  }
})();
