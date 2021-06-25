$(function() {
    // calculate body padding top depend on navpar height
    $("body").css("paddingTop", $("nav").innerHeight());

    // nav slide
    $("nav .list-nav").click(function() {
        $("nav ul").slideToggle();
    })
    $("nav .list-nav").click(function() {
        $("nav .link").slideToggle();
    })

    // navbar function
    $("nav li a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 20
        }, 1000);
    });

    // button function in banner
    $(".banner-button").click(function() {
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        }, 1000);
    });

    // add activ class on navbar link
    $("nav ul li a").click(function() {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

    // scrolling top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {

            $(".scroll-top").fadeIn()
        } else {
            $(".scroll-top").fadeOut()
        }
    })

    $(".scroll-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
})