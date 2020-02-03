jQuery( function ( $ ) {

	// Focus styles for menus when using keyboard navigation

	// Properly update the ARIA states on focus (keyboard) and mouse over events
	$( 'nav > ul' ).on( 'focus.wparia  mouseenter.wparia', '[aria-haspopup="true"]', function ( ev ) {
		$( ev.currentTarget ).attr( 'aria-expanded', true );
		// $(ev.currentTarget).addClass('selected');
		$(ev.currentTarget).find('> ul').css('display', 'block');
				// console.log( 'AAA', $( ev.currentTarget ).parents('.menu-item').attr('aria-expanded') );

	} );

		// Properly update the ARIA states on blur (keyboard) and mouse out events
	$( 'nav > ul' ).on( 'blur.wparia  mouseleave.wparia', '[aria-haspopup="true"]', function ( ev ) {
		$( ev.currentTarget ).attr( 'aria-expanded', false );
		// console.log( 'BBB', $( ev.currentTarget ).parents('.menu-item').attr('aria-expanded') );
	} );



	$(window).keyup(function (e) {

		// console.log('keyup');

		var $focusedItem = $("nav > ul li:focus");
		var $focusParent = $focusedItem.parents('[aria-expanded="true"]');
	    var code = (e.keyCode ? e.keyCode : e.which);
	    if (code == 9 && $focusedItem.length) {
	        // console.log('I was tabbed!', $focusParent);
	        // $("nav > ul li").not($focusedItem).css('background', 'red');
	        // $focusParent.siblings().css('background', 'green');
	        // $focusedItem.css('background', 'blue');

	        $focusedItem.siblings().find('ul').css('display', 'none');;
	        $focusParent.siblings().find('ul').css('display', 'none');;

	    }

	    if(code == 13){
			var href = $focusedItem.find('a').attr('href');
			if(typeof href != 'undefined'){
				// console.log('enter pressed > go to ', href);
				window.location = href;
			}
	    	// console.log($focusedItem.find('a').attr('href'));
	    }

	});

	$('.mobile-nav .menu-item-has-children .sub-menu li:last-child a').on('blur', function() {
		if (!$(this).parent().hasClass('menu-item-has-children')) {
			$(this).parent().parent().hide();
		}
	});
	$('.mobile-nav li a').on('focus', function() {
		if ($(this).parent().parent().parent().hasClass('mobile-nav')) {
			$(this).parent().prev().find('.sub-menu').hide();
		}
	});
	//Close menu if focus logo;
	$('.logo-link, .school-logo-link, .logo-text').on('focus', function() {
		$('.sitewide-menu').hide();
		$('.menu-button').attr("aria-expanded", false);
		$('.flaticon-menu').text('Menu collapsed');
	});
	// $("nav ul li").each(function (i) { $(this).attr('tabindex', i + 1); });

} );
