(function () {
  var shopsTown = document.querySelector('.shops__town');


  shopsTown.addEventListener('click', function() {
    shopsTown.classList.toggle('shops__town--open');
  });
})();

$(document).ready(function(){
  $('.shops__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    draggable: true,
    centerMode: true,
    centerPadding: '10px'
  });
});
