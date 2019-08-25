
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

//mask--four-numbers
$(function(){
  $("input.mask--four-numbers").mask("9999");
});
$(function(){
  $("input.mask--six-numbers").mask("9 9 9 9 9 9");
});

//
$(function(){
  $("input.mask--passport").mask("9999  9 9 9 9 9 9");
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

// Header Geolocation
  $('.ui.dropdown.geolocation').dropdown();



// START Hide preloader after load page
  $(window).on('load', function () {
      var $preloader = $('#page-preloader'),
          $spinner   = $preloader.find('.spinner');
      $spinner.fadeOut();
      $preloader.delay(350).fadeOut('slow');
  });
// FINISH Hide preloader after load page

//open info on mobile tests-pages
$(".info-mobile-only").on("click", function(){
  $(this).toggleClass("close");
  $(".main__test-info.test__info").toggleClass("opened");
});