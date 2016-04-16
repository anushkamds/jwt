'use strict';

/**
 * @ngdoc service
 * @name jwtApp.alert
 * @description
 * # alert
 * Service in the jwtApp.
 */
angular.module('jwtApp')
  .service('alert', function ($rootScope, $timeout) {
    var alertTimeOut;
    return function (type, title, message, timeout) {
      $rootScope.alert = {
        hasBeenShown: true,
        show: true,
        type: type,
        message: message,
        title: title
      };
      $timeout.cancel(alertTimeOut);
      alertTimeOut = $timeout(function () {
        $rootScope.alert.show = false;

      }, timeout || 2000)
    };
  });
