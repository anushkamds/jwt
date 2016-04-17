'use strict';

/**
 * @ngdoc service
 * @name jwtApp.authToken
 * @description
 * # authToken
 * Factory in the jwtApp.
 */
angular.module('jwtApp')
  .factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cacheToken;
    var userToken = 'userToken';

    return {
      setToken: function (token) {
        cacheToken = token;
        storage.setItem(userToken, token);
      },
      getToken: function () {
        if (!cacheToken)
          cacheToken = storage.getItem(userToken);

        return cacheToken;
      },
      isAuthenticated: function () {
        return !!this.getToken();
      },
      removeToken: function () {
        cacheToken = null;
        storage.removeItem(userToken);
      }
    };
  });
