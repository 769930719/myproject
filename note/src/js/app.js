var noteApp = angular.module('noteApp', ['ui.router']);
angular.module('noteApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main/home');

    $stateProvider.state('main', {
        url: '/main',
        abstract: true,
        templateUrl: '/html/main/main.html'
    }).state('main.home', {
        url: '/home',
        templateUrl: '/html/main/home.html'
    }).state('main.system', {
        url: '/system',
        abstract: true,
        templateUrl: '/html/system/index.html'
    }).state('main.system.user', {
        url: '/user',
        templateUrl: '/html/system/user/index.html'
    }).state('main.system.role', {
        url: '/role',
        templateUrl: '/html/system/role/index.html'
    });
}]).run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    //console.log($state.$current);
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
