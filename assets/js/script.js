$(function (){
	$('.nutrition h4').click(function(){
		$(this).next('.nutrition-table').slideToggle(150);
	});

	$('.mobile-menu').click(function(){
		$('ul.menu').slideToggle(150);
		$('header').toggleClass('open');
	});

	$('body').on('click', 'ul.menu li', function(){
		if( $('header').hasClass('open') ){
			console.log('close!');
			$('ul.menu').slideToggle(150);
			$('header').removeClass('open');
		}
	});

});
