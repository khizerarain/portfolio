/*
Author       : themes_master
Template Name: Janu - Personal Portfolio Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/	
			
		/*START MENU JS*/				
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});
		
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});		  	
		/*END MENU JS*/

		/*START PROGRESS BAR*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS BAR*/		

		/* START VIDEO POPUP JS */
		$('.magnific_popup').magnificPopup({
		  disableOn: 700,
		  type: 'iframe',
		  mainClass: 'mfp-fade',
		  removalDelay: 160,
		  preloader: false,
		  fixedContentPos: false,
		  disableOn: 300
		});	
		
	/*START TESTIMONIAL JS*/	
	$("#testimonial-slider").owlCarousel({
	   items:1,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[980,1],
		itemsTablet:[768,1],
		itemsMobile:[650,1],
		pagination:true,
		navigation:true,
		navigationText:["",""],
		slideSpeed:1000,
		autoPlay:false
	});
	/*END TESTIMONIAL JS*/	
	
	jQuery('#portfolio').imagesLoaded(function() {
		var $grid = $('.portfolio-grid').isotope({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.portfolio-item',
		  percentPosition: true,
		});		
	});	
	
	/*Image Popup*/
		$('.gallery_enlarge_icon').magnificPopup({
		 type:'image',
			gallery:{
			enabled:true
			 }
		});	
	}); 

	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/

			
})(jQuery);


  

