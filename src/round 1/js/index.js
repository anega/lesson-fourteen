/**
 * Created by mcfedr on 20/03/2014.
 */
function HelloCtrl($scope) {
    $scope.hello = "Hello world";

    $scope.go = function() {
        alert($scope.yourName);
    };
}
