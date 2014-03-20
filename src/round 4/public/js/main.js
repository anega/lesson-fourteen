/**
 * Created by mcfedr on 20/03/2014.
 */
angular.module('bye', []).controller('Bye', [
  '$scope',
  '$timeout',
  function ($scope, $timeout) {
    $timeout(function () {
      $scope.message = 'Good bye';
    }, 2000).then(function () {
      $scope.message = 'Good bye timeout';
    });
  }
]);/**
 * Created by mcfedr on 20/03/2014.
 */
angular.module('hello', ['weather']).controller('Hello', [
  '$scope',
  '$http',
  'weatherFunc',
  'weatherObj',
  function ($scope, $http, weatherFunc, weatherObj) {
    $scope.weather = 'Loading...';
    $scope.go = function () {
      alert($scope.yourName);
    };
    weatherFunc().then(function (res) {
      $scope.weather = res;
    });
    weatherObj.get().then(function (res) {
      $scope.weather = res;
    });
  }
]);/**
 * Created by mcfedr on 20/03/2014.
 */
angular.module('app', [
  'hello',
  'bye'
]);/**
 * Created by mcfedr on 20/03/2014.
 */
angular.module('weather', []).factory('weatherFunc', [
  '$http',
  function ($http) {
    return function () {
      return $http.get('http://api.openweathermap.org/data/2.5/weather?q=cherkassy,ua').then(function (res) {
        return res.data.weather[0].description;
      }, function () {
        return 'Error loading weather';
      });
    };
  }
]).service('weatherObj', [
  '$http',
  function ($http) {
    this.$http = $http;
    this.get = function () {
      return this.$http.get('http://api.openweathermap.org/data/2.5/weather?q=cherkassy,ua').then(function (res) {
        return res.data.weather[0].description;
      }, function () {
        return 'Error loading weather';
      });
    };
  }
]);