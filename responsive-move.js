//------------------------------------------------------------------------------
//
//	Responsive Move
//
//	Summary
//		Moves content from .js-responsive-move to its associated data-js-responsive-move
//
//	Usage
//		.js-responsive-move
//			the container of the original content to move
//		[data-js-responsive-move=MOVE_ID]
//			The unique data attribute added to the .js-responsive-move element AND an empty target element
//
//	Optional
//		[data-js-responsive-move-breakpoint=NUMBER]
//			The max-breakpoint in pixels. Default is 767.
//
//	Creates
//		.js-responsive-move--is-active
//			Added to the element which is currently active
//		.js-responsive-move--is-inactive
//			Added to the element which is currently inactive
//
//		methods:
//			resize
//			set
//------------------------------------------------------------------------------
!function($){
	"use strict";
	var items = document.getElementsByClassName('js-responsive-move');
	function responsiveMoveGo() {
		if (window.matchMedia && window.matchMedia('(max-width: ' + breakpoint + 'px)').matches) {
			$item.removeClass('js-responsive-move--is-active').addClass('js-responsive-move--is-inactive').html('');
			$target.removeClass('js-responsive-move--is-inactive').addClass('js-responsive-move--is-active').html(content);
		} else {
			$target.removeClass('js-responsive-move--is-active').addClass('js-responsive-move--is-inactive').html('');
			$item.removeClass('js-responsive-move--is-inactive').addClass('js-responsive-move--is-active').html(content);
		}
	}
	for ( var i = 0; i < items.length; i++ ) {
		var item = items[i];
		var $item = $(items[i]);
		if ( item.getAttribute('data-js-responsive-move-breakpoint') && !isNaN(item.getAttribute('data-js-responsive-move-breakpoint')) ) {
			breakpoint = item.getAttribute('data-js-responsive-move-breakpoint');
		}
		var targetEl = item.getAttribute('data-js-responsive-move');
		var $target = $('[data-js-responsive-move="' + $item.attr('data-js-responsive-move') + '"]:not(.js-responsive-move)');
		var content = $item.html();
		responsiveMoveGo();
		window.addEventListener('resize', function(event){
			responsiveMoveGo();
		});
	}
}(jQuery);

