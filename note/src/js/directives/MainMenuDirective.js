angular.module('noteApp').directive('mainMenu', function() {
    return {
        restrict: "EA",
        replace: true,
        scope: {
            config: '=config'
        },
        templateUrl: "html/main/mainMenu.html",
        link: function(scope, element, attrs, controller) {
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
