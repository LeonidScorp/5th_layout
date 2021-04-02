// var coursesChildren = $(".course-slider-container").children().length;
// var dotsVisible=true;
// if (coursesChildren < 4) {
//     dotsVisible = false;
//     if (coursesChildren < 3) {
//         // $(".course-slider-container").removeClass("course-slider");
//         $(".course-slider-container").addClass("flex-container");
//     }
        
// } else coursesChildren = 3;

// $('.course-slider').slick({
//     dots: dotsVisible,
//     arrows:false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: coursesChildren,
//     slidesToScroll: 1,
//     responsive: [
//         {
//         breakpoint: 850,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             dots: true
//         }
//         },
//         {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true
//         }
//         }
        
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// }); 

// $(window).resize(function () {
//     if (($(window).width() < 1220)) {
//         dotsVisible = true;
//     } else {
//         if (coursesChildren < 4) dotsVisible = false;
//     }
// });

var sections = $('section'), nav = $('.main-menu'), nav_height = $('header').outerHeight();

$(window).on('scroll', function () {
    var wintop = $('html').offset().top;
    var cur_pos = $(this).scrollTop();
    if (cur_pos>wintop) {
        $('header').css({'background-color': '#14141A', "transition-property": "background-color", "transition-duration": ".5s"});
    } else {
        $('header').css({"background-color": "transparent", "transition-property": "background-color", "transition-duration": ".5s"});
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

    // $('.feedbacks-slider').slick({
    //     autoplay:true,
    //     autoplaySpeed: 10000,
    //     dots: true,
    //     infinite: true,
    //     arrows:false,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear'
    // });

    // $('.mentors-slider-container').slick({
    //     autoplay:true,
    //     autoplaySpeed: 10000,
    //     dots: true,
    //     infinite: true,
    //     arrows:false,
    //     speed: 500,
    //     cssEase: 'linear'
    // });

    

    