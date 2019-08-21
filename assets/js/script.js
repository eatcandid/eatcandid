$(function (){
	console.log('script loaded');

	$('h1').okshadow({
		color: '#839389',
		textShadow: true,
		xMax: 5,
		yMax: 5,
		yOffset: 3,
		fuzzMin: 0,
		fuzzMax: 0,
	});
	$('#intro .button').okshadow({
		color: '#839389',
		xMax: 5,
		yMax: 5,
		yOffset: 3,
		fuzzMin: 0,
		fuzzMax: 0,
	});
});