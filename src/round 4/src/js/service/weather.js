/**
 * Created by mcfedr on 20/03/2014.
 */
angular.module('weather', [])
    .factory('weatherFunc', function($http) {
        return function() {
            return $http.get('http://api.openweathermap.org/data/2.5/weather?q=cherkassy,ua').then(function(res) {
                return res.data.weather[0].description;
            }, function() {
                return 'Error loading weather';
            });
        };
    })
    .service('weatherObj', function ($http) {
        this.$http = $http;
        this.get = function() {
            return this.$http.get('http://api.openweathermap.org/data/2.5/weather?q=cherkassy,ua').then(function(res) {
                return res.data.weather[0].description;
            }, function() {
                return 'Error loading weather';
            });
        };
    });
