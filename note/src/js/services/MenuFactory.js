angular.module('noteApp').factory('MenusFact', ['$http', '$q', function($http, $q) {
    var service = {};
    service.getMenus = function() {
        var deferred = $q.defer();
        $http.get('/json/menus.json').success(function(response, status, headers, config) {
            deferred.resolve(response);
        }).error(function(response, status, headers, config) {
            deferred.reject(response);
        });
        return deferred.promise;
    };
    return service;
}]);
