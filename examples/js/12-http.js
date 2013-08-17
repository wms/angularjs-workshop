angular.module('MyApp', [])
    .controller('HttpController', function($scope, $http) {
        $scope.prefix = 'http://localhost:8081/';
        $scope.url = '';

        $scope.get = function() {
            $http({
                method: 'GET',
                url: $scope.prefix + $scope.url
            })
            .success(function(data) {
                $scope.response = data;
                console.debug(data);
            })
            .error(function(data, status) {
                $scope.response = "Error: " + status;
            });
        };
    });

