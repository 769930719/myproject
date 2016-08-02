angular.module('noteApp').controller('MenuCtrl', ['$scope', 'MenusFact', function($scope, MenusFact) {
    //$scope.$state.$current.name = 'main.home';


    $scope.test = 'aaaa';
    console.log($scope.$state.includes("main"));
    $scope.show = $scope.$state.includes("main");
    // MenusFact.getMenus().then(function(resp) {
    // $scope.menus = resp;
    //      $.each($scope.$state,function(i,n){
    //  console.log(i);
    //  console.log(n);
    // });
    // $scope.$watch();
    // console.info($scope.$state.includes("main.user"));
    // }); //[{name:"系统管理",url:"",children:[{name:"用户管理",url:"#/main/user"}]}];

}]);
