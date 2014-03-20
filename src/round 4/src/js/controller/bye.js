/**
 * Created by mcfedr on 20/03/2014.
 */
angular.module('bye', [])
    .controller('Bye', function($scope, $timeout) {
        $timeout(function() {
            $scope.message = "Good bye";
        }, 2000)
            .then(function() {
                $scope.message = "Good bye timeout";
            });
    });
