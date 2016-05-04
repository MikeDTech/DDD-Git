(function() {
angular.module('app', [])
    .directive('navLinks', function() {
        return {
            restrict: 'E',
            templateUrl: '/templates/directives/nav-links.html'
        }
    })
})();