/**/
jQuery(document).ready(function($){	


$(".c_back").fancybox({ href: '#form_call_back', wrapCSS: 'modal_call_back'});
$(".c_back2").fancybox({ href: '#form_call_back_2', wrapCSS: 'modal_call_back'});
$(".callback_img, .ic, .callback_txt").fancybox({ href: '#form_call_back_2', wrapCSS: 'modal_call_back'});
$("#gallery").fancybox();
});
/**/

    $( document ).ready(function() {

        $(".js-video-button").modalVideo({
            youtube:{
                controls:0,
                nocookie: true
            }
        });
    });