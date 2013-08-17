angular.module('MyApp', [])
    .controller('CarsController', function($scope) {
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

        $scope.foo = "Foo";
        $scope.total = 500;
    })
    .directive('myButtonGroup', function() {
        var linkFn = function(scope, iElement, iAttrs) {
            scope.total = scope.collection.length;
            scope.bar = "Bar";

            scope.removeLast = function() {
                scope.collection.pop();
            };

            console.debug("Isolate scope: ", scope);
        };

        var scopeDef = {
            collection: '='
        };

        return {
            template: '<div class="btn-group">' +
                        '<button class="btn" ng-click="removeLast()">{{ total }}</button>' +
                        '<button class="btn" ng-repeat="car in collection">{{car.colour}} {{car.make}}</button>' +
                      '</div>',
            link: linkFn,
            scope: scopeDef
        };
    });

