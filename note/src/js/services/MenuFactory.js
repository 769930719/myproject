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
