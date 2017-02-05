//------------------------------------------------------------------------------
//
//  Responsive Move
//
//  Summary
//    Moves content from .js-responsive-move to its associated data-js-responsive-move
//
//  Usage
//    .js-responsive-move
//      the container of the original content to move
//    [data-js-responsive-move=MOVE_ID]
//      The unique data attribute added to the .js-responsive-move element AND an empty target element
//
//  Optional
//    [data-js-responsive-move-breakpoint=NUMBER]
//      The max-breakpoint in pixels. Default is 767.
//
//  Creates
//    .is-active
//      Added to the element which is currently active
//    .is-inactive
//      Added to the element which is currently inactive
//
//------------------------------------------------------------------------------
!function(){
  'use strict';

  var DEFAULT_BREAKPOINT = '767';
  var responsiveItems = [];
  var timeoutTimer;

  // constructor
  function ResponsiveItem(originalEl, targetEl, content, breakpoint) {
    this.originalEl = originalEl;
    this.targetEl = targetEl;
    this.content = content;
    this.breakpoint = breakpoint;
  }

  // pointBreak sees if the item needs to be moved or not and moves it accordingly:
  ResponsiveItem.prototype.pointBreak = function(){
    if (window.matchMedia('(max-width: ' + this.breakpoint + 'px)').matches) {
      this.originalEl.classList.remove('is-active');
      this.originalEl.classList.add('is-inactive');
      while (this.originalEl.firstChild) { this.originalEl.removeChild(this.originalEl.firstChild); }
      this.targetEl.classList.remove('is-inactive');
      this.targetEl.classList.add('is-active');
      this.targetEl.innerHTML = this.content;
    } else {
      this.targetEl.classList.remove('is-active');
      this.targetEl.classList.add('is-inactive');
      while (this.targetEl.firstChild) { this.targetEl.removeChild(this.targetEl.firstChild); }
      this.originalEl.classList.remove('is-inactive');
      this.originalEl.classList.add('is-active');
      this.originalEl.innerHTML = this.content;
    }
  };

  // creates all of the ResponsiveItem Objects and stores them in the responsiveItems array.
  function _init() {
    var breakpoint;
    var items = document.getElementsByClassName('js-responsive-move');

    for ( var i = 0; i < items.length; i++ ) {
      if ( items[i].getAttribute('data-js-responsive-move-breakpoint') && !isNaN(items[i].getAttribute('data-js-responsive-move-breakpoint')) ) {
        breakpoint = items[i].getAttribute('data-js-responsive-move-breakpoint');
      } else {
        breakpoint = DEFAULT_BREAKPOINT;
      }
      var targetName = items[i].getAttribute('data-js-responsive-move');
      var target = document.querySelector('[data-js-responsive-move="' + targetName + '"]:not(.js-responsive-move)' );

      var content = items[i].innerHTML;
      var item = new ResponsiveItem(items[i], target, content, breakpoint);

      responsiveItems.push(item);
    }
  }

  // This is what fires the pointBreak method on initial load and page resize
  var launchPad = function() {
    responsiveItems.forEach( function(item) {
      item.pointBreak();
    });
  };

  _init();
  launchPad();
  window.addEventListener('resize', function(event) {
    clearTimeout(timeoutTimer);
    timeoutTimer = setTimeout(function(){
      launchPad();
    }, 250);
  });
}();

