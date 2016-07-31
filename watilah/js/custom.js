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

    //create animations
    new WOW().init();

    //create circles
    $('#html').circliful({
        animation: 1,
        animationStep: 6,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 1,
        percent: 90,
        iconColor: '#3498DB',
        icon: 'f13b',
        iconSize: '40',
        iconPosition: 'middle',
        text:'HTML5',
        textBelow:true,
        textColor:'#008178'
    });

    $('#css').circliful({
        animation: 1,
        animationStep: 6,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 1,
        percent: 80,
        iconColor: '#3498DB',
        icon: 'f13c',
        iconSize: '40',
        iconPosition: 'middle',
        text:'CSS3',
        textBelow:true,
        textColor:'#008178'
    });

    $('#js').circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 1,
        percent: 75,
        iconColor: '#3498DB',
        icon: 'f1cc',
        iconSize: '40',
        iconPosition: 'middle',
        text:'jQuery',
        textBelow:true,
        textColor:'#008178'
    });

    $('#ps').circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 1,
        percent: 60,
        iconColor: '#3498DB',
        icon: 'f03e',
        iconSize: '40',
        iconPosition: 'middle',
        text:'Photoshop',
        textBelow:true,
        textColor:'#008178'
    });
    $('#ai').circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 1,
        percent: 76,
        iconColor: '#3498DB',
        icon: 'f03e',
        iconSize: '40',
        iconPosition: 'middle',
        text:'Illustrator',
        textBelow:true,
        textColor:'#008178'
    });
    $('#oa').circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 1,
        percent: 70,
        iconColor: '#3498DB',
        icon: 'f007',
        iconSize: '40',
        iconPosition: 'middle',
        text:'Overall Skills',
        textBelow:true,
        textColor:'#008178'
    });

});
