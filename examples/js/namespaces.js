angular.module('MyApp', [])
    .controller('PersonController', function($scope) {
        $scope.person = {
            name: "Warren Seymour",
            age: 28
        };

        $scope.birthday = function() {
            $scope.person.age += 1;
        };
    });
