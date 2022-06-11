jQuery(document).ready(function () {
   let carousel = jQuery("#slider");
 
   carousel.owlCarousel({
     items: 2,
     autoplay: true,
     autoplayTimeout: 6000,
     autoplayHoverPause: false,
     smartSpeed: 1000,
     dotsSpeed: 1000,
     center:true,
     loop: true,
     nav: true,
     navText: [
       "<div class='nav-btn prev-slide'></div>",
       "<div class='nav-btn next-slide'></div>",
     ],
     dots: true,
     mouseDrag: true,
     margin: 50,
     stagePadding: 0,
     autoWidth: false,
     lazyLoad: true,
     lazyLoadEager: true,
     responsiveClass: true,
     responsive: {
       0: {
         items: 1,
         mouseDrag: true,
         autoplay: true,
         smartSpeed: 1000,
       },
       479: {
         items: 1,
         dots: true,
         mouseDrag: true,
         autoplay: true,
         smartSpeed: 1000,
       },
       767: {
         items: 1,
         dots: true,
         mouseDrag: true,
         autoplay: true,
         smartSpeed: 1000,
       },
       991: {
         items: 3,
         dots: true,
         mouseDrag: true,
         autoplay: true,
         smartSpeed: 1000,
       },
       1647: {
         items: 3,
         autoplay: true,
         mouseDrag: true,
         smartSpeed: 1000,
       },
     },
   });
 });

 jQuery(document).ready(function(){
  jQuery('.humburgerMenu').click(function(){
      jQuery(this).toggleClass('active');
      jQuery('.nav-menu').slideToggle(300, function(){
          if(jQuery(this).css('display') === 'none'){
              jQuery(this).removeAttr('style');
          }
      });
        jQuery('.sing-up').slideToggle(300, function(){
            if(jQuery(this).css('display') === 'none'){
                jQuery(this).removeAttr('style');
            }
        });
  })
})