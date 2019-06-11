
// Overflow hidden when mobile menu is open
$('.header__toggle-btn').click(function(e) {
  $('body').toggleClass('overflow-hidden');
});

// Mask for tel inputs
$(function(){
  $("input.mask").mask("+7 (999) 999-9999");
});
$(function(){
  $("input.mask--text").mask("a 99 aa 999");
});

// Header fixed
  var interview = new Waypoint.Inview({
    element: $('main'),
    entered: function(direction) {
      if (direction === 'up') {
        $('header').removeClass('fixed')
      };
    },
    exit: function(direction) {
      if (direction === 'down') {
        $('header').addClass('fixed')
      };
    }
  });