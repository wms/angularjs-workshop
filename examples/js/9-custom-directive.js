angular.module('MyApp', [])
    .directive('expandingPanel', function() {
        return function(scope, element, attrs) {
            element.css({
                height: '20px',
                overflow: 'hidden'
            });

            element.on('mouseenter', function() {
                element.css({
                    height: 'auto'
                });
            });

            element.on('mouseleave', function() {
                element.css({
                    height: '20px'
                });
            });
        }
    });
