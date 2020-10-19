'use strict';

window.addEventListener('load', function () {

    $('.slider__wrap').owlCarousel({
        loop: true,
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 400,
        dots: true,
        autoplayHoverPause: true,
        dotsContainer: $('.slider__dots')
    });

});