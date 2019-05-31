(function () {
  function testMot(elem) {
    console.log(`Hello from Technical Checkup`);
    const button3 = document.querySelector('.request__form-wrapper .request__btn');
    console.log(button3);

    const section1 = document.querySelector('.request__form-wrapper .request__form');

    const section2 = document.querySelector('.request__form-wrapper .request__form--mot2');

    button3.addEventListener('click', function (evt) {
      evt.preventDefault();
      section1.classList.add('request__form--mot-invisible');
      section2.classList.remove('request__form--mot-invisible');
    })
  }
  window.isElementPresent('.main__form-test--mot', testMot);
})();