//===================
//  Odometer
//  Here set the numebers
//===================

setTimeout(function(){
  $('.odometer.01').html(23578);
}, 1000);
setTimeout(function(){
  $('.odometer.02').html(12702);
}, 1000);


//===================
//  Magnific Popup
//===================

jQuery(document).ready(function() {
  jQuery('.image-gallery').magnificPopup({
    delegate: '.item a', // child items selector, by clicking on it popup will open
    type:'image'
  });

  //===================
  //  WOW
  //  do not touch
  //===================

  new WOW().init();

});

$('.button').magnificPopup({
  items: {
	     src: 'https://www.youtube.com/watch?v=8WZ-Tlugyyw&ab_channel=AnthonioMusic'
     },
  type: 'iframe',
  iframe: {
	    	markup: '<div class="mfp-iframe-scaler">'+
            		'<div class="mfp-close"></div>'+
            		'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            		'</div>', 
        patterns: {
            youtube: {
	              index: 'youtube.com/', 
	              id: 'v=', 
	              src: '//www.youtube.com/embed/8WZ-Tlugyyw?autoplay=1' 
		        }
		     },
		     srcAction: 'iframe_src', 
     }
});


//===================
// Scroller
//  do not touch
//===================

$(function(){

  $('nav.pushy a[href*=#]').click(function() {

  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {

          var $target = $(this.hash);

          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

          if ($target.length) {

              var targetOffset = $target.offset().top -0;

              $('html,body').animate({scrollTop: targetOffset}, 800);

              return false;

          }

      }

  });

});
