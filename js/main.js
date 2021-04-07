var sections = $('section'), nav = $('.navigation'), nav_height = $('header').outerHeight();

$(window).on('scroll', function () {
    var wintop = $('html').offset().top;
    var cur_pos = $(this).scrollTop();
    if (cur_pos>wintop) {
        $('header').addClass("header-bg");
    } else {
        if (!$(".main-menu-mobile").hasClass("shown")) {
            $('header').removeClass("header-bg");
        }
    }
    sections.each(function() {
       var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();   
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
var $el = $(this), id = $el.attr('href');    
$('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
}, 500);
return false;
});

$('.slider-container').slick({
    autoplay:false,
    autoplaySpeed: 10000,
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
        breakpoint: 1250,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
        }
    }
    ]
});

function showMenu () {
    var wintop = $('html').offset().top;
    var cur_pos = $(this).scrollTop();
    if (wintop==cur_pos) {
        $('header').toggleClass("header-bg");
    }
    $(".main-menu-mobile").toggleClass("shown");
}

$(".menu-link").click(function () {
    $(".main-menu-mobile").removeClass("shown");
});

$('.navbar-toggle').click(function(event){
    event.stopPropagation();
});

$(window).click(function () {
    $(".main-menu-mobile").removeClass("shown");
});