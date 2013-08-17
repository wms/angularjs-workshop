angular.module('MyApp', ['ngResource'])
    .factory('CarService', function($resource) {
        return $resource('http://localhost:8081/cars/_all_docs');
    })
    .controller('CarController', function($scope, CarService) {
        $scope.cars = CarService.query();
        $scope.newCar = new CarService();

        $scope.addCar = function() {
            $scope.cars.push($scope.newCar.save());
            $scope.newCar = new CarService();
        };
    });

