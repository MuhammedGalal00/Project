$(window).scroll(function(){
    var navScroll = $(window).scrollTop();
    if(navScroll > 1){
        $(".header-area").addClass("sticky");
    }else{
        $(".header-area").removeClass("sticky");
    }
});

$("#open").click(function(){
    $("#sidenav").css("width","250px");
     $("#open").css("marginLeft" , "251px");
}); 

$(".closebtn").click(function(){
     $("#sidenav").css("width","0");
     $("#open").css("marginLeft" , "0");
});


// button up start //

$("#btnUp").click(function(){

    $("html,body").animate({scrollTop:'0'},2000)
    });
    // button up down //