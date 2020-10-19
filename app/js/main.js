'use strict';

window.addEventListener('load', function () {

    (function homePageSlider() {
        const slider = document.querySelector('.slider__wrap');

        if( !slider ) {
            return;
        }

        $( slider ).owlCarousel({
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
    })();

});