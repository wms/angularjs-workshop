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
    })
    .directive('myButtonGroup', function() {
        var linkFn = function(scope, iElement, iAttrs) {
            console.debug("Instance scope:", scope);
            console.debug("Instance element:", iElement);
        };

        var compileFn = function(tElement, tAttrs) {
            console.debug("Template element: ", tElement[0].innerHTML);

            return linkFn;
        };

        return {
            template: '<div class="btn-group">' +
                        '<button class="btn" ng-repeat="car in cars">{{car.colour}} {{car.make}}</button>' +
                      '</div>',
            compile: compileFn,
        };
    });

