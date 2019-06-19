$(document).ready(function(){
  $('.main__howto-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        arrows: false,
      }
    ]
  });

  $('.main__advantages-list--slider').slick({
    slide: '.main__advantages-item--slide',
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,


    mobileFirst: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });
});
