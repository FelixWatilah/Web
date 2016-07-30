$(document).ready(function () {

    //typed.js to animate the name
    $('.typo').typed({
        stringsElement:$('.text'),
        typeSpeed:100,
        backDelay:500,
        loop:false,
        contentType:'html',
        loopCount:true
    });
    new WOW().init();
});
