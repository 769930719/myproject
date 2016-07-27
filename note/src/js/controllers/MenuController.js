angular.module('noteApp').controller('MenuCtrl',['$scope', function($scope) {
	$scope.menus=[{name:"系统管理",url:"",children:[{name:"用户管理",url:"#/main/user"}]}]
	$scope.getChildren=function(){
		
	};
	
}]);