$(function () {

    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 5) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }

        if ($(window).scrollTop() > 1000) {
            $('#scrollTop').addClass('active');
        } else {
            $('#scrollTop').removeClass('active');
        }
    });
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });
}
);