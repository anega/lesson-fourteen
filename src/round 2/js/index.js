/**
 * Created by mcfedr on 20/03/2014.
 */
function HelloCtrl($scope, $http) {
    $scope.weather = "Loading...";

    $scope.go = function() {
        alert($scope.yourName);
    };

    $http.get('http://api.openweathermap.org/data/2.5/weather?q=cherkassy,ua').then(function(res) {
        $scope.weather = res.data.weather[0].description;
    }, function() {
        $scope.weather = 'Error loading weather';
    });
}
