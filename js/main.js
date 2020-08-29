$('.review__slider').slick({
    dots: false,
    infinite: true,
    nextArrow: `<button class="slider__arrow--next"><img src="img/about/slider__arrow.svg" alt=""></button>`,
    prevArrow: `<button class="slider__arrow--prev"><img src="img/about/slider__arrowPrev.svg" alt=""></button>`,
    slidesToShow:2,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    cssEase: 'ease-in-out',
    centerMode: true,
});

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1500);
            return false;
    });
});