/**
 * Created by mcfedr on 20/03/2014.
 */
angular.module('hello', ['weather'])
    .controller('Hello', function($scope, $http, weatherFunc, weatherObj) {
        $scope.weather = "Loading...";

        $scope.go = function() {
            alert($scope.yourName);
        };

        weatherFunc().then(function(res) {
            $scope.weather = res;
        });

        weatherObj.get().then(function(res) {
            $scope.weather = res;
        });
    });
