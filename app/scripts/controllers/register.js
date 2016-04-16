'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, alert) {
    $scope.submit = function () {
      var url = 'http://localhost:3000/register';
      var user = {email: $scope.email, password: $scope.password};

      $http.post(url, user)
        .success(function (res) {
          alert('success', 'yes!', 'not');

        })
        .error(function (res) {
          alert('warning', 'O!', 'ngot');

        })
    };
  });
