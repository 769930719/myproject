var comm = comm || {};

(function(c) {

    c.initMenu = function() {
    	

        var lis = $("#left_menu>ul>li").find('a').on('click', function(e) {
            var li = $(this).parent('li');
            var ul = $(this).next('ul');
            if (ul.is(":visible")) {
                ul.slideUp();
            } else {
                ul.slideDown();
                $('.active').removeClass('active');
                li.addClass('active');
                var lis = ul.find('li');
                lis.on('click', function(e) {
                    $('.active').removeClass('active');
                    $(this).addClass('active');
                });
            }
        });

    };

})(comm);

$(function() {
    comm.initMenu();
});
