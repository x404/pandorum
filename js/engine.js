$(document).ready(function(){

	$('.logomenu').hover(
		function(){$('body').addClass('l-with-nav')},
		function(){$('body').removeClass('l-with-nav')}
	);

	// styler
	$('#lang').styler();
	$('#countries').styler();


	// inputs
	$('.input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	})

	$('body').on('focusin', '.input-field', function(e) {
		return $(this).addClass('is-focused');
	})
	.on('focusout', '.input-field', function(e) {
		$(this).removeClass('is-focused');
		return $(this).removeClass('is-focused');
	})
	.on('change', '.input-field', function() {
		$(this).removeClass('is-charged');
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});


	// выбор города из ненумерованного списка
	$('.cities dd a').click(function(e){
		e.preventDefault();
		$this = $(this);
		$('.city-select-link span').text($this.text());
		$('.cities dd').removeClass('current');
		$this.parent().addClass('current');

		$('#opencity').modal('hide');

		$('.rating-actions-filter .open-city-select').text($this.text())
	});


	// табы в контактах
	$('.tabs li').click(function(e){
		e.preventDefault();
		var $this = $(this),
			tab = $this.data('tab');

			$('.tabs li.current').removeClass('current');
			$this.addClass('current');

		$('.content .visible').removeClass('visible');
		$('.content ').find('.' + tab).addClass('visible');

		$('.gmap.visible').removeClass('visible');
		$('.map ').find('.' + tab).addClass('visible');

	})


	// $("#foo1").owlCarousel({
	// 	items : 1,
	// 	pagination : true,
	// 	navigation : true,
	// 	singleItem : true,
	// 	navigationText: ["", ""]
	// });	

	// carousel
	// $('#foo1').owlCarousel({
	// 	loop:false,
	// 	nav:true,
	// 	dots: true,
	// 	items:4,
	// 	navText: ["PREV", "NEXT"],
	// 	navContainer : '.powerfarms .owl-nav',
	// 	dotsContainer : '.powerfarms .owl-dots',
	// 	responsive:{
	// 		0:{
	// 			items:1,
	// 			stagePadding: 20
	// 		},
	// 		670:{
	// 			items:2
	// 		},
	// 		991:{
	// 			items:3
	// 		},
	// 		1300:{
	// 			items:4
	// 		}
	// 	}
	// });
});

// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE
