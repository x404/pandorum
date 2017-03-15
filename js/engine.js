$(document).ready(function(){

	var container = $('.icon2 a span'), 
		userText = $('.icon2 a'); 
	
	// Shuffle the contents of container

	// Bind events
	$('.logomenu nav a span').mouseover(function(e){
		$(this).shuffleLetters();
	})


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
	$('#people').styler();
	
	$('#langquest').styler();


	var _dropdown,
		_dropdown2,
		_dropdown3,
		_dropdown4;
		

	$('#birthdaydate').styler({
		onFormStyled: function(){
			_dropdown = $('.day .jq-selectbox__dropdown');
			_dropdown.find('ul').wrap('<div class="scroll-pane"></div>');
		},
		onSelectOpened: function(){
			var _ul = $(this).find('.jq-selectbox__dropdown ul');
			var height = _ul.height();
			var _srollPane = _dropdown.find('.scroll-pane');
			_srollPane.height(height);
			_ul.css('max-height', 'none');
			_srollPane.mCustomScrollbar({
				scrollButtons : {enable:true},
				autoDraggerLength : true
			});
		}		
	});

	$('#birthdaymonth').styler({
		onFormStyled: function(){
			_dropdown2 = $('.month .jq-selectbox__dropdown');
			_dropdown2.find('ul').wrap('<div class="scroll-pane"></div>');
		},
		onSelectOpened: function(){
			var _ul = $(this).find('.jq-selectbox__dropdown ul');
			var height = _ul.height();
			var _srollPane = _dropdown2.find('.scroll-pane');
			_srollPane.height(height);
			_ul.css('max-height', 'none');
			_srollPane.mCustomScrollbar({
				scrollButtons : {enable:true},
				autoDraggerLength : true
			});
		}		
	});

	$('#birthdayyear').styler({
		onFormStyled: function(){
			_dropdown3 = $('.year .jq-selectbox__dropdown');
			_dropdown3.find('ul').wrap('<div class="scroll-pane"></div>');
		},
		onSelectOpened: function(){
			var _ul = $(this).find('.jq-selectbox__dropdown ul');
			var height = _ul.height();
			var _srollPane = _dropdown3.find('.scroll-pane');
			_srollPane.height(height);
			_ul.css('max-height', 'none');
			_srollPane.mCustomScrollbar({
				scrollButtons : {enable:true},
				autoDraggerLength : true
			});
		}		
	});

	$('#cityselect').styler({
		onFormStyled: function(){
			_dropdown4 = $('.cityselect .jq-selectbox__dropdown');
			_dropdown4.find('ul').wrap('<div class="scroll-pane"></div>');
		},
		onSelectOpened: function(){
			var _ul = $(this).find('.jq-selectbox__dropdown ul');
			var height = _ul.height();
			var _srollPane = _dropdown4.find('.scroll-pane');
			_srollPane.height(height);
			_ul.css('max-height', 'none');
			_srollPane.mCustomScrollbar({
				scrollButtons : {enable:true},
				autoDraggerLength : true
			});
		}
	});	


	$('#sortcity').styler({
		onFormStyled: function(){
			_dropdown4 = $('.sortcity .jq-selectbox__dropdown');
			_dropdown4.find('ul').wrap('<div class="scroll-pane"></div>');
		},
		onSelectOpened: function(){
			var _ul = $(this).find('.jq-selectbox__dropdown ul');
			var height = _ul.height();
			var _srollPane = _dropdown4.find('.scroll-pane');
			_srollPane.height(height);
			_ul.css('max-height', 'none');
			_srollPane.mCustomScrollbar({
				scrollButtons : {enable:true},
				autoDraggerLength : true
			});
		}
	});	


	$('#review-scroller').mCustomScrollbar({
		scrollButtons : {enable:true},
		autoDraggerLength : true
	});	


	$('#other_reviews-scroller').mCustomScrollbar({
		scrollButtons : {enable:true},
		autoDraggerLength : true
	});	


		/* Time Parser */
		// $('.cifr span').each(function() {
		  // $(this).attr("data-number", parseInt($(this).text()));
		// });

	var inter = 1;
	$('.cifr span').each(function() {
		var count = parseInt($(this).data('number')),
			block = $(this),
			timeout = null,
			step = 1;
		timeout = setInterval(function() {
			if (step == 25) {
				block.text(count.toString());
				clearInterval(timeout);
			} else {
				block.text((Math.floor(count*step/25)).toString());
				step++;
			}
		}, 30);
	});


	$('#stay').change(function(e) {
		($(this).prop('checked')) ? $('.oneuser .now_link').addClass('disabled') : $('.oneuser .now_link').removeClass('disabled');
	});

	// add gamers
	$('.now_link').on('click', function(e){
		e.preventDefault();
		var check = $('#stay').prop('checked');

		if (!check) {
			i = parseInt($('.userinfo .users .row:last-child').data('row')) + 1;
			var row = '<div class="row" data-row="' + i + '"><a href="#" class="deluser"></a> <div class="cell"> <div class="input-field"> <label for="username' + i + '" class="name-field">ФИО</label> <label for="username' + i + '" class="helper-field helper-field-name">ФИО</label> <input type="text" id="username' + i + '" name="name' + i + '" class="form-control required name" value="" /> </div> </div> <div class="cell"> <div class="input-field"> <label for="usertel' + i + '" class="name-field">Телефон</label> <label for="usertel' + i + '" class="helper-field helper-field-name">Телефон</label> <input type="tel" id="usertel' + i + '" name="tel' + i + '" class="form-control required tel" value="" /> </div> </div> <div class="cell"> <div class="input-field"> <label for="usermail' + i + '" class="name-field">E-mail</label> <label for="usermail' + i + '" class="helper-field helper-field-name">E-mail</label> <input type="email" id="usermail' + i + '" name="email' + i + '" class="form-control required email" value="" /> </div> </div> </div> ';
			$('.users').append(row);
			$('.oneuser').addClass('hide');
			$('.multiuser').removeClass('hide');

			// $('input.tel').inputmask({
			// 	mask: '+7(999)999-99-99',
			// 	showMaskOnHover : false
			// });
		}
	});
	
	// inputs
	$('.input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});

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


	// booking page - calc products
	$('.plus').click(function(e){
		e.preventDefault();
		var $this = $(this),
			$el = $this.prev();
			$count = parseInt($el.data('count'))+1;
			$el.data('count', $count);
			$el.text($count + 'шт');
			calc();
	});


	$('.minus').click(function(e){
		e.preventDefault();
		var $this = $(this),
			$el = $this.next();
			$count = parseInt($el.data('count'))-1;
			($count <= 0) ? $count = 0 : '';

			$el.data('count', $count);
			$el.text($count + 'шт');
			calc();
	});

	function calc(){
		var sum1 = $('.costgame').data('cost'),
			sum2 = 0;
		$('#foo2 .owl-item').each(function(i, el){
			price = parseInt($(el).find('.price .value span').text());
			count = parseInt($(el).find('.amount').data('count'));
			sum2 += price*count;
		});

		sum = sum1 + sum2;
		$('#cost').text(addSpaces(sum));
		$('#sum2').text(sum2);
	}

	function addSpaces(nStr){
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ' ' + '$2');
		}
		return x1 + x2;
	}



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
	});


	// mask
	// $('input.tel').inputmask({
	// 	mask: '+7(999)999-99-99',
	// 	showMaskOnHover : false
	// });
	// #mask


	// validate
	// $.validator.addMethod("validphone", function(value){
	// 	if (Inputmask.isValid(value, { mask: '+7(999)999-99-99'})) return true
	// 	else return false;
	// },"");


	// callback form
	$('#callback-form .submit').click(function(e){
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('#callback-form').validate({
		rules: {
			name:{
				required : true
			},
			tel: {
				required:true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#callback-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'tel') $('#callback-form .helper-field-name').text('Ошибка!').addClass('lerror');
		},
		submitHandler: function(form){
			// send form ajax
			//alert("Отправлено!")
		}		
	});


	// page contact
	$('#writeus-form .submit').click(function(e){
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('#writeus-form').validate({
		rules: {
			name:{
				required : true
			},
			email: {
				required : true,
				email: true
			},
			msg: {
				required : true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#writeus-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'email') $('#writeus-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'msg') $('#writeus-form .helper-field-name').text('Ошибка!').addClass('lerror');
		},
		submitHandler: function(form){
			// send form ajax
			//alert("Отправлено!")
		}
	});	



	// =page reviews
	// TripAdvisor, Flamp
	$('#addgeneralreview-form .submit').click(function(e){
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('#addgeneralreview-form').validate({
		rules: {
			name:{
				required : true
			},
			email: {
				required : true,
				email: true
			},
			msg: {
				required : true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#addgeneralreview-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'email') $('#addgeneralreview-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'msg') $('#addgeneralreview-form .helper-field-name').text('Ошибка!').addClass('lerror');
		},
		submitHandler: function(form){
			// send form ajax
			//alert("Отправлено!")
		}
	});	
	// =/page reviews


	// =page reviews
	// TripAdvisor, Flamp
	$('#addreview-form .submit').click(function(e){
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('#addreview-form').validate({
		rules: {
			name:{
				required : true
			},
			email: {
				required : true,
				email: true
			},
			date: {
				required : true
			},
			city: {
				required : true
			},
			msg: {
				required : true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#addreview-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'email') $('#addreview-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'date') $('#addreview-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'msg') $('#addreview-form .helper-field-name').text('Ошибка!').addClass('lerror');
		},
		 invalidHandler: function() {
			setTimeout(function() {
				$('#cityselect').trigger('refresh').styler({
					onFormStyled: function(){
						_dropdown4 = $('.cityselect .jq-selectbox__dropdown');
						_dropdown4.find('ul').wrap('<div class="scroll-pane"></div>');
					},
					onSelectOpened: function(){
						var _ul = $(this).find('.jq-selectbox__dropdown ul');
						var height = _ul.height();
						var _srollPane = _dropdown4.find('.scroll-pane');
						_srollPane.height(height);
						_ul.css('max-height', 'none');
						_srollPane.mCustomScrollbar({
							scrollButtons : {enable:true},
							autoDraggerLength : true
						});
					}
				})
			}, 1)
		},
		submitHandler: function(form){
			// send form ajax
			//alert("Отправлено!")
		}
	});	
	// =/page reviews


	$('#ityselect').styler({
		onFormStyled: function(){
			_dropdown4 = $('.cityselect .jq-selectbox__dropdown');
			_dropdown4.find('ul').wrap('<div class="scroll-pane"></div>');
		},
		onSelectOpened: function(){
			var _ul = $(this).find('.jq-selectbox__dropdown ul');
			var height = _ul.height();
			var _srollPane = _dropdown4.find('.scroll-pane');
			_srollPane.height(height);
			_ul.css('max-height', 'none');
			_srollPane.mCustomScrollbar({
				scrollButtons : {enable:true},
				autoDraggerLength : true
			});
		}
	});	


	// =booking
	$('#booking-form .submit').click(function(e){
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('#booking-form').validate({
		errorPlacement: function(error, element) {
			if (element.hasClass('name')) {
				element.prev().text('Ошибка!').addClass('lerror')
			};
			if (element.hasClass('tel')) {
				element.prev().text('Ошибка!').addClass('lerror')
			};
			if (element.hasClass('email')) {
				element.prev().text('Ошибка!').addClass('lerror')
			}
		}
	});


	$('#booking-form2').validate({
		rules: {
			name:{
				required : true
			},
			email: {
				required : true,
				email: true
			},
			date: {
				required : true
			},		
			msg: {
				required : true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#booking-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'email') $('#booking-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'date') $('#booking-form .helper-field-name').text('Ошибка!').addClass('lerror');
			if (element.attr('name') == 'msg') $('#booking-form .helper-field-name').text('Ошибка!').addClass('lerror');
		},
		submitHandler: function(form){
			// send form ajax
			//alert("Отправлено!")
		}
	});	
	// =/booking

});

$(document).on('click','.deluser', function(e){
	e.preventDefault();
	var $this = $(this);
	$(this).parent().remove();

	$l = $('.userinfo .users .row').length;

	if ($l <= 1){
		$('.oneuser').removeClass('hide');
		$('.multiuser').addClass('hide');
	}
})



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



/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU
 */
jQuery.extend(jQuery.validator.messages, {
	required: "Заполните поле",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	accept: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: jQuery.validator.format("Пожалуйста, введите не больше {0} символов."),
	minlength: jQuery.validator.format("Пожалуйста, введите не меньше {0} символов."),
	rangelength: jQuery.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
	range: jQuery.validator.format("Пожалуйста, введите число от {0} до {1}."),
	max: jQuery.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
	min: jQuery.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});