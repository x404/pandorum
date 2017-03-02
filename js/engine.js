$(document).ready(function(){


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
