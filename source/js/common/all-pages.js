
// Overflow hidden when mobile menu is open
$('.header__toggle-btn').click(function(e) {
  $('body').toggleClass('overflow-hidden');
});

// Mask for tel inputs
$(function(){
  $("input.mask").mask("+7 (999) 999-9999");
});

// Header fixed
var waypoint = new Waypoint({
    element: $('header'),
    handler: function(direction) {
      $('header').toggleClass('fixed')
    },
    offset: -75
  });
