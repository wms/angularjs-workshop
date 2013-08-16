angular.module('MyApp', [])
    .controller('CarController', function($scope) {
        $scope.cars = [
            {
                colour: "Blue",
                make: "Metro"
            },
            {
                colour: "Black",
                make: "Astra"
            },
            {
                colour: "Grey",
                make: "Corsa"
            }
        ];

        $scope.newCar = {
            colour: "",
            make: ""
        };

        $scope.addCar = function() {
            $scope.cars.push($scope.newCar);
            $scope.newCar = {
                colour: "",
                make: ""
            };
        };
    });
