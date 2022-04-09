$(document).ready(function () {

    // Find all iframes
    var $iframes = $( "video-iframe" );

    // Find & save the aspect ratio for all iframes
    $iframes.each(function () {
    $( this ).data( "ratio", this.height / this.width )
    // Remove the hardcoded width & height attributes
    .removeAttr( "width" )
    .removeAttr( "height" );
    });

    // Resize the iframes when the window is resized
    $( window ).resize( function () {
    $iframes.each( function() {
    // Get the parent container's width
    var width = $( this ).parent().width();
    $( this ).width( width )
    .height( width * $( this ).data( "ratio" ) );
    });
    // Resize to fix all iframes on page load.
    }).resize();


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });



    	
  'use strict';
  
  var c, currentScrollTop = 0,
      navbar = $('.navbar');

  $(window).scroll(function () {
     var a = $(window).scrollTop();
     var b = navbar.height();
    
     currentScrollTop = a;
    
     if (c < currentScrollTop && a > b + b) {
       navbar.addClass("scrollUp");
     } else if (c > currentScrollTop && !(a <= b)) {
       navbar.removeClass("scrollUp");
     }
     c = currentScrollTop;
 });
   
   
   $(document.links).filter(function() {
     return this.hostname != window.location.hostname;
   }).attr('target', '_blank');
});

var isAlreadyRun = false;

$(window).scroll( function(){

    $('.counter-wrap').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();


            if( bottom_of_window > ( bottom_of_object + 20 )  ){
				if (!isAlreadyRun) {
					$('.counter-number').each(function () {
	            	
	                $(this).prop('Counter', 0).animate({
	                    Counter: $(this).text()
	                }, {
	                        duration: 3500,
	                        easing: 'swing',
	                        step: function (now) {
	                            $(this).text(Math.ceil(now));
	                        }
	                    });
	            	});
				}
                isAlreadyRun = true;
            }
    }); 


        	
  'use strict';
  
  var c, currentScrollTop = 0,
      navbar = $('.navbar');

  $(window).scroll(function () {
     var a = $(window).scrollTop();
     var b = navbar.height();
    
     currentScrollTop = a;
    
     if (c < currentScrollTop && a < b + b) {
       navbar.addClass("scrolled");
     } else if (c > currentScrollTop && !(a >= b)) {
       navbar.removeClass("scrolled");
     }
     c = currentScrollTop;
 });

});


var splide = new Splide( '.splide-sertifikati', {
    perPage: 3,
    rewind : true,
    arrows:true,
    gap: '20px',
    breakpoints: {
    1199: {
      perPage: 2,
            pagination: true,
            type: 'loop'
    },
    992: {
      perPage: 2,
            pagination: true,
            arrows:false,
            type: 'loop'
    },
        768: {
      perPage: 1,
            pagination: true,
            type: 'loop'
    },
  }
  } );
  splide.mount();


  var splide = new Splide( '.splide-partneri', {
    perPage: 3,
    rewind : true,
    arrows:true,
    gap: '20px',
    breakpoints: {
    1199: {
      perPage: 3,
            pagination: true,
            type: 'loop'
    },
    992: {
      perPage: 2,
            pagination: true,
            arrows:false,
            type: 'loop'
    },
        768: {
      perPage: 2,
            pagination: true,
            type: 'loop'
    },
  }
  } );
  splide.mount();

  var splide = new Splide( '.splide-reference', {
    perPage: 3,
    perMove: 1,
    type:'loop',
    rewind : true,
    arrows:true,
    focus: 'center',
    breakpoints: {
    992: {
      perPage: 1,
            pagination: true,
            arrows:false,
            type: 'loop'
    },
        768: {
      perPage: 1,
            pagination: true,
            type: 'loop'
    },
  }
  } );
  splide.mount();



