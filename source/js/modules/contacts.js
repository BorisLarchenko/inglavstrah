(function () {
  const shopsTown = document.querySelector('.shops__town');


  shopsTown.addEventListener('click', function() {
    shopsTown.classList.toggle('shops__town--open');
  });


  //find elements
  const btnTest = document.querySelector('.review-thanks-open');
  const blocksArr = document.querySelectorAll('.form__contacts');
  //open/close blocksArr while btnTest is clicked
  if (blocksArr.length !== 0) {
    btnTest.addEventListener('click', function (evt) {
      evt.preventDefault();
      for (let i =0; i < blocksArr.length; i++) {
        blocksArr[i].classList.toggle('form__contacts--close');
      }
    })
  }

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
