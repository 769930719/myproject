var noteApp = angular.module('noteApp', ['ui.router']);
angular.module('noteApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('main', {
        url: '/main',
        templateUrl: '/html/main/center.html',
        controller: 'MenuCtrl'
    }).state('main.home', {
        url: '/home',
        templateUrl: '/html/main/2.html'
    });
}]);


