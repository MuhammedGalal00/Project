// navbar slide Action Start//

$(window).scroll(function(){
    var navScroll = $(window).scrollTop();
    if(navScroll > 1){
        $(".header-area").addClass("sticky");
    }else{
        $(".header-area").removeClass("sticky");
    }
});

// navbar slide Action Start//

// Testimonial Auto Slider //

(function autoSlider() {

    $('.slider .active').each(function () {

        if(!$(this).is(':last-child')) {

            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('active').next().addClass('active').fadeIn();

                autoSlider();
            });
        } else {
            $(this).delay(3000).fadeOut(1000, function () {

                $(this).removeClass('active');
                $('.slider div').eq(0).addClass('active').fadeIn();
                autoSlider();

            });
        }
    });

}());

// Testimonial Auto Slider End //

// Pie Chart Start//

$(function() {
    $('.chart').easyPieChart({
        //your options goes here
    });
});


// Pie Chart End //

// button up start //

$("#btnUp").click(function(){

$("html,body").animate({scrollTop:'0'},2000)
});
// button up down //