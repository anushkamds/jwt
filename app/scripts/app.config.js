/**
 * Created by anushkamahesh on 4/15/16.
 */
'use strict';

angular
  .module('jwtApp').config(function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: '/views/main.html'
    })

    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    })

    .state('logout', {
      url: '/logout',
      controller: 'LogoutCtrl'
    });

});
