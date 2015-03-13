/*
 * Smooth Scroll Nav with Page Markers
 * Add smooth scrolling to the navigation, and include page markers
 */
$(document).ready(function() {

	$('header').on('click', 'a', function(e) {
		var section = $(e.currentTarget).prop('hash');

		if(!$(e.currentTarget).hasClass('linkedin')) {
			e.preventDefault();
		}

		$('html,body').stop().animate({
			scrollTop: $(section).prop('offsetTop') - 35
		}, 800);
	});

	$(window).on('scroll', function(e) {

		var sections = [];

		if( $(document).scrollTop() > 80 ) {
			$('nav').css('fontSize', '12px');
			$('nav').css('padding', '5px');

		} else {
			$('nav').css('fontSize', '16px');
			$('nav').css('padding', '10px');
		}

		$('nav a').each(function() {
			sections.push($(this).prop('hash'));
		});

		if($(window).scrollTop() < 528) {

			$('a[href='+sections[0]+']').css('background-color', 'green');
			$('nav :not(a[href='+sections[0]+'])').css('background-color', 'transparent');

		} else if($(window).scrollTop() >= 528 && $(window).scrollTop() < 977) {

			$('a[href='+sections[1]+']').css('background-color', 'green');
			$('nav :not(a[href='+sections[1]+'])').css('background-color', 'transparent');

		} else if($(window).scrollTop() >= 977 && $(window).scrollTop() < 1681) {

			$('a[href='+sections[2]+']').css('background-color', 'green');
			$('nav :not(a[href='+sections[2]+'])').css('background-color', 'transparent');

		} else if($(window).scrollTop() >= 1681 && $(window).scrollTop() < 2277) {

			$('a[href='+sections[3]+']').css('background-color', 'green');
			$('nav :not(a[href='+sections[3]+'])').css('background-color', 'transparent');

		} else {

			$('a[href='+sections[4]+']').css('background-color', 'green');
			$('nav :not(a[href='+sections[4]+'])').css('background-color', 'transparent');

		}
		
	});

});


/*
 * Popup Modal 
 * Make images under "Hacks" a Slideshow that appears in a modal
 */
$(document).ready(function() {

	// Modal
	$('.contact').on('click', function(e) {

		var transparentScreen = $('<div class="transparentScreen" />'),
			modal = $('#form-template').html();

		$('body').on('mousewheel', function(e) {
		    e.preventDefault();
		    e.stopPropagation();
		});

		$('body').append(transparentScreen);
		$('body').append(modal);		

		$('.transparentScreen').on('click', function() {
			$('.modal').css('display', 'none');
			$('body').off('mousewheel');
			$(this).remove();
		});

		// Close Modal when the esc key is pressed
		$(document).keyup(function(e) {
			if(e.keyCode === 27) {
				$('.transparentScreen').click();
			}
		});

	});


});














