var noteApp = angular.module('noteApp', ['ui.router']);
angular.module('noteApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main/admin/home');

    $stateProvider.state('main', {
        url: '/main',
        abstract: true,
        templateUrl: '/html/main/main.html'
    }).state('main.admin', {
        url: '/admin',
        templateUrl: '/html/main/center.html'
    }).state('main.admin.home', {
        url: '/home',
        templateUrl: '/html/main/2.html'
    }).state('main.admin.user', {
        url: '/users',
        templateUrl: '/html/user/list.html'
    });
}]).run(['$rootScope', '$state', '$stateParams', function($rootScope,$state, $stateParams){
    //console.log($state.$current);
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);


