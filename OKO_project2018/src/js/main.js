console.log('Hello world!');

$(document).ready(function () {
    console.log('ready');
});

$(window).resize(function () {
    console.log('resize');
});

$(window).scroll(function () {
    console.log('scroll');
});

$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 1500);
        return false;
    });
});
