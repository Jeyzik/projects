jQuery.noConflict();
jQuery(document).ready(function() {

    'use strict'

    jQuery(".fancybox").fancybox();

    
    jQuery('.rev_slider').slick({
        centerMode: true,
        infinity: true,
        // dots: true,
        slidesToShow: 1.6,
        responsive: [
    {
      breakpoint: 1099,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
    });
});
