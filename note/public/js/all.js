var noteApp = angular.module('noteApp', ['ui.router']);

angular.module('noteApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider.state('main', {
        url: '/main',
        views: {
            'main_top': {
                templateUrl: '/html/main/top.html'
            },
            'main_left': {
                templateUrl: '/html/main/left.html',
                controller: MenuController
            },
            'main_center': {
                templateUrl: '/html/main/main.html'
            }
        }
    }).state('main.test', {
        url: '/test',
        views: {
            'center_content': {
                templateUrl: '/html/main/2.html'
            }
        }
    });
}]);

angular.module('noteApp').controller('MenuController', ['$scope','MenuFactory', function($scope,MenuFactory) {
    MenuFactory.getMenus().then(function(resp) {
        console.log(resp);
    });
}]);

angular.module('noteApp').factory('MenuFactory', ['$http','$q', function($http,$q){
	var service = {};
service.getMenus=function(){
	var deferred = $q.defer();
	$http.get('/menu/getAll').success(function(response, status, headers, config) {
			deferred.resolve(response);
		}).error(function(response, status, headers, config) {
			deferred.reject(response);
		});
		return deferred.promise;
}
	return service;
}])
