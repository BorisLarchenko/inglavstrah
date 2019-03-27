(function () {
  var gamburger = document.querySelector('.header__toggle-btn');
  // header__nav
  var navigarion = document.querySelector('.header__nav');

  gamburger.addEventListener('click', function() {
    navigarion.classList.toggle('header__nav--opened');
  });

})();