$(document).ready(function(){

	$('.logomenu').hover(
		function(){$('body').addClass('l-with-nav')},
		function(){$('body').removeClass('l-with-nav')}
	);

	// плавная промотка из хедера
	$('.card .intro .rate a[href*="#"]:not([href="#"]), .intro_wrapper a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				// $('body').removeClass('o-menu');
				// $('#navbar').css('height', 'auto');
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
		        	target.focus();
		        });
				return false;
			}
		}
	});


	// styler
	$('#lang').styler();
	$('#countries').styler();
	$('#sort').styler();


	$('#review-scroller').mCustomScrollbar({
		scrollButtons : {enable:true},
		autoDraggerLength : true
	});	


	$('#other_reviews-scroller').mCustomScrollbar({
		scrollButtons : {enable:true},
		autoDraggerLength : true
	});	

	
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
	});


	// карусель
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:3,
		startPosition : 2,
		stagePadding : 250,
		navText: ["", ""],
		onInitialized: function (event) {
			refreshFirstLastVisible(event);
		},
		onChanged: function (event) {
			refreshFirstLastVisible(event);
		}
	});


	$('#foo2').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:5,
		navText: ["", ""]
	});


	$('.plus').click(function(e){
		e.preventDefault();
		var $this = $(this),
			$el = $this.prev();
			$count = parseInt($el.data('count'))+1;
			$el.data('count', $count);
			$el.text($count + 'шт');
	});


	$('.minus').click(function(e){
		e.preventDefault();
		var $this = $(this),
			$el = $this.next();
			$count = parseInt($el.data('count'))-1;
			($count <= 0) ? $count = 0 : '';

			$el.data('count', $count);
			$el.text($count + 'шт');
	});


	function refreshFirstLastVisible(event){
		var target = $(event.target).find('.owl-item');
			target.removeClass('first');
			target.eq(event.item.index-1).addClass('first');
			target.removeClass('last');
			target.eq(event.item.index+event.page.size).addClass('last');		
	};


	// datetime picker
	$('#datetimepicker').datetimepicker({
		language: 'ru',
		pickTime: false,
		format: 'D MMMM YYYY'
	});


	// datepicker in booking card
	var dateNow = new Date();
	$('#selectdatepicker').datetimepicker({
		language: 'ru',
		pickTime: false,
		format: 'D MMMM YYYY',
		defaultDate:dateNow
	});

	$('#selectdatepicker').on('dp.change', function(e){
		day1 = e.date.format('D');
		month1 = e.date.format('MMM');

		day2 = e.date.add(1, 'd').format('D');
		month2 = e.date.format('MMM');


		html1 = '<i>' + day1 + '</i>' + month1;
		html2 = '<i>' + day2 + '</i>' + month2;

		$('#date1 span').html(html1);
		$('#date2 span').html(html2);
		// console.log(day1 + ' , ' + month1);
		// console.log(day2 + ' , ' + month2);
	})

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
