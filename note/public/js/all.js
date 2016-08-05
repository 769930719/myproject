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

angular.module('noteApp').controller('MenuCtrl', ['$scope', 'MenusFact', function($scope, MenusFact) {

    MenusFact.getMenus().then(function(resp) {
        console.log(resp);
        $scope.menus = resp;
    });

}]);

angular.module('noteApp').directive('mainMenu', function() {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            menus: '=menus',
            state: '=state'
        },
        templateUrl: "html/main/mainMenu.html",
        link: function(scope, element, attrs, controller) {
            // console.info(scope);
            scope.$watch('menus', function(n, o, s) {
                // console.log(element.find('li'));
                $('.accordion li a').on('click', function() {
                    var ul = $(this).next('ul');
                    var li = $(this).parent('li');
                    if (ul.length > 0) {
                        if (li.hasClass('active')) {
                            if (ul.is(":visible")) {
                                ul.hide('slow');
                            } else {
                                ul.show('slow');
                            }
                        } else {
                            $('.active').find('ul').hide('slow');
                            $('.active').removeClass('active');
                            ul.show('slow');
                            li.addClass("active");
                        }
                    }
                    return false;
                });

            });
        }
    };
});

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
