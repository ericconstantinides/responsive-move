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
//------------------------------------------------------------------------------
!function(){
	'use strict';

	var breakpoint = '767';
	var items = document.getElementsByClassName('js-responsive-move');

	HTMLElement.prototype.hasClass = function (className) {
		return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
	};
	HTMLElement.prototype.addClass = function (className) {
		if (!this.hasClass(className)) {
			this.className += ' ' + className;
		}
	};
	HTMLElement.prototype.removeClass = function (className) {
		var newClass = ' ' + this.className.replace(/[\t\r\n]/g, ' ') + ' '
		if (this.hasClass(className)) {
			while (newClass.indexOf( ' ' + className + ' ') >= 0) {
				newClass = newClass.replace(' ' + className + ' ', ' ');
			}
			this.className = newClass.replace(/^\s+|\s+$/g, ' ');
		}
	};
	HTMLElement.prototype.toggleClass = function (className) {
		var newClass = ' ' + this.className.replace(/[\t\r\n]/g, " ") + ' ';
		if (this.hasClass(className)) {
			while (newClass.indexOf(" " + className + " ") >= 0) {
				newClass = newClass.replace(" " + className + " ", " ");
			}
			this.className = newClass.replace(/^\s+|\s+$/g, ' ');
		} else {
			this.className += ' ' + className;
		}
	};

	function responsiveMoveGo() {
		if (window.matchMedia && window.matchMedia('(max-width: ' + breakpoint + 'px)').matches) {
			// console.log('small');
			item.removeClass('js-responsive-move--is-active');
			item.addClass('js-responsive-move--is-inactive');
			item.innerHTML = '';
			target.removeClass('js-responsive-move--is-inactive');
			target.addClass('js-responsive-move--is-active');
			target.innerHTML = content;
		} else {
			// console.log('large');
			target.removeClass('js-responsive-move--is-active');
			target.addClass('js-responsive-move--is-inactive');
			target.innerHTML = '';
			item.removeClass('js-responsive-move--is-inactive');
			item.addClass('js-responsive-move--is-active');
			item.innerHTML = content;
		}
		// debugger;
	}
	for ( var i = 0; i < items.length; i++ ) {
		var item = items[i];
		var $item = $(items[i]);
		if ( item.getAttribute('data-js-responsive-move-breakpoint') && !isNaN(item.getAttribute('data-js-responsive-move-breakpoint')) ) {
			breakpoint = item.getAttribute('data-js-responsive-move-breakpoint');
		}
		var itemTarget = item.getAttribute('data-js-responsive-move');
		var targets = document.querySelectorAll( '[data-js-responsive-move="' + itemTarget + '"]' );
		debugger;
		for ( var i = 0; i < targets.length; i++ ) {
			if ( !targets[i].hasClass('js-responsive-move') ) {
				var target = targets[i];
				break;
			}
		}

		item.style.border = "1px dashed red";
		target.style.outline = "1px dashed green";
		console.log("item:", item);
		console.log("target:", target);

		var content = item.innerHTML;
		// debugger;
		responsiveMoveGo();
	}
	window.addEventListener('resize', function(event){
		// console.log(pimp);
		pimp++;
		responsiveMoveGo();
	});
}();

