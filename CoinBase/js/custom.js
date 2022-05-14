jQuery.noConflict();
jQuery(document).ready(function() {

    'use strict'
});
jQuery(document).ready(function(){
    jQuery('.btn-humburger').click(function(){
        jQuery(this).toggleClass('active');
        jQuery('.nav-menu').slideToggle(300, function(){
            if(jQuery(this).css('display') === 'none'){
                jQuery(this).removeAttr('style');
            }
        });
        jQuery('.nav-menu-reg').slideToggle(300, function(){
            if(jQuery(this).css('display') === 'none'){
                jQuery(this).removeAttr('style');
            }
        });
    })
})