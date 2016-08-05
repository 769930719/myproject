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
