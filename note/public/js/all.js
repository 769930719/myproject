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

angular.module('noteApp').directive('mainMenu', function() {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            config: '=config'
        },
        templateUrl: "html/main/mainMenu.html",
        link: function(scope, element, attrs, controller) {
            console.info(scope);
            // scope.$watch('config', function(n, o, s) {
            //     var lis = $(element).children('li');
            //     lis.find('a').on('click', function() {
            //         if (!$(this).attr('href')) {
            //             var uls = $(this).next('ul');
            //             if (uls.is(":visible")) {
            //                 uls.slideUp('slow');
            //                 $(element).find('.active').removeClass('active');
            //             } else {
            //             	$(element).find('.child').slideUp('slow');
            //             	$(element).find('.active').removeClass('active');
            //             	$(this).parent().addClass('active');
            //                uls.slideDown('slow');
            //             }
            //         }
            //         return false;
            //     });

            // });
        }
    };
});

angular.module('noteApp').factory('MenusFact', ['$http', '$q', function($http, $q) {
    var service = {};
    service.getMenus = function() {
        var deferred = $q.defer();
        $http.get('/menu/getAll').success(function(response, status, headers, config) {
            deferred.resolve(response);
        }).error(function(response, status, headers, config) {
            deferred.reject(response);
        });
        return deferred.promise;
    };
    return service;
}]);
