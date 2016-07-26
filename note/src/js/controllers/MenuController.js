angular.module('noteApp').controller('MenuController', ['$scope','MenuFactory', function($scope,MenuFactory) {
    MenuFactory.getMenus().then(function(resp) {
        console.log(resp);
    });
}]);
