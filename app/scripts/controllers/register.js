'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function () {
      console.log('Test');
    };
  });
