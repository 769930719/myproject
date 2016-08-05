angular.module('noteApp').controller('MenuCtrl', ['$scope', 'MenusFact', function($scope, MenusFact) {

    MenusFact.getMenus().then(function(resp) {
        console.log(resp);
        $scope.menus = resp;
    });

}]);
