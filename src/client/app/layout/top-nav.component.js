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

  topNavController.$inject = [];
  function topNavController() {
    var $ctrl = this;


    ////////////////

    $ctrl.$onInit = function () {
      var mainbottom = $('#main').offset().top;
      // on scroll,
      $(window).on('scroll', function () {
        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
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
  }
})();
