$(function (){
	console.log('script loaded');
	$('.nutrition h4').click(function(){
		$(this).next('.nutrition-table').slideToggle(150);
	});

	$('.mobile-menu').click(function(){
		$('ul.menu').slideToggle(150);
	});
	
});