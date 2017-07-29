(function () {
  'use strict';

  angular
    .module('app.layout')
    .component('topNav', {
      templateUrl: 'app/layout/top-nav.html',
      controller: topNavController,
      controllerAs: '$ctrl',
      bindings: {}
    });

  topNavController.$inject = ['$uibModal'];
  function topNavController($uibModal) {
    var $ctrl = this;

    $ctrl.signUp = signUp;

    ////////////////

    $ctrl.$onInit = function () {
      var mainbottom = $('#main').offset().top;
      // on scroll,
      $(window).on('scroll', function () {
        // we round here to reduce a little workload
        var stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
          $('.navbar').addClass('past-main');
          $('.navbar').addClass('effect-main')
        } else {
          $('.navbar').removeClass('past-main');
        }
      });
    };
    $ctrl.$onChanges = function (changesObj) { };
    $ctrl.$onDestroy = function () { };

    function signUp() {
      console.log('hey');
      var modalInstance = $uibModal.open({
        component: 'signupModal'
      });
    }
  }
})();
