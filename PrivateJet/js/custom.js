jQuery.noConflict();
jQuery(document).ready(function() {

    'use strict'

    jQuery(".fancybox").fancybox();

    let carousel = jQuery('#carousel-partners');

    carousel.owlCarousel({
        items: 4,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        smartSpeed: 1000,
        dotsSpeed: 1000,
        loop: true,
        nav: false,
        navText: [''],
        dots: true,
        mouseDrag: true,
        margin: 30,
        stagePadding: 0,
        autoWidth: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                mouseDrag: true,
                autoplay: true,
                smartSpeed: 1000,
            },
            479: {
                items: 1,
                dots: true,
                autoplay: true,
                smartSpeed: 1000,
                mouseDrag: true,
            },
            767: {
                items: 2,
                dots: true,
                autoplay: true,
                smartSpeed: 1000,
                mouseDrag: true,
            },
            991: {
                items: 3,
                dots: true,
                autoplay: true,
                smartSpeed: 1000,
                mouseDrag: true,
            },
            1099: {
                items: 4,
                dots: true,
                mouseDrag: true,
            }
        }
    });

});