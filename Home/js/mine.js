$(window).scroll(function(){
    var navScroll = $(window).scrollTop();
    if(navScroll > 1){
        $(".header-area").addClass("sticky");
    }else{
        $(".header-area").removeClass("sticky");
    }
});

 var typed = new Typed('.element', {
    strings: ['Front-End', 'Back-End', 'IOS'],
    typeSpeed: 30,
    backSpeed: 30,
    fadeOut: true,
    loop: true
  });


  // button up start //

$("#btnUp").click(function(){

    $("html,body").animate({scrollTop:'0'},2000)
    });
    // button up down //