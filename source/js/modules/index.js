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
  //find thanks block in the .main__contacts section on the index.html
  function showHideThanks() {
    const contactsArr = document.querySelectorAll('.main__contacts-form-wrapper');
    const contactsButton = contactsArr[0].querySelector('.btn.slider__btn.form__btn');

    contactsButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      contactsArr[0].classList.add('form__contacts--close');
      contactsArr[1].classList.remove('form__contacts--close');
    });
  }
  window.isElementPresent('.main__contacts .main__contacts-form-wrapper', showHideThanks)



});
