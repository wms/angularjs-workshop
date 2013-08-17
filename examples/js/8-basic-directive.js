angular.module('MyApp', [])
    .directive('myDirective', function() {
        return function() {
            console.debug('Hello from directive!');
        };
    });
