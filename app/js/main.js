'use strict';

import { Menu } from "./Menu";
import { Calculator } from "./calculator";

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

    (function menu() {
        const menu = new Menu({
            button: document.querySelector('.header-menu__btn'),
            hamburger: document.querySelector('.header-menu__burger'),
            menu: document.querySelector('.header__menu'),
            activeClass: 'active'
        });

        menu.init();
    })();

    (function calculator() {
        Calculator('calculator');
    })();
});