
// Overflow hidden when mobile menu is open
$('.header__toggle-btn').click(function(e) {
  $('body').toggleClass('overflow-hidden');
});

// Mask for tel inputs
$(function(){
  $("input.mask").mask("+7 (999) 999-9999");
});

// Header fixed
/*
var waypoint = new Waypoint({
    element: $('header'),
    handler: function(direction) {
      $('header').toggleClass('fixed')
    },
    offset: -75
  });
*/

var interview = new Waypoint.Inview({
  element: $('main'),
  entered: function(direction) {
    if (direction === 'up') {
      $('header').removeClass('fixed')
    }
  }
});

var waypoint = new Waypoint.Inview({
  element: $('header'),
  exited: function(direction) {
      $('header').addClass('fixed')
  }
});

