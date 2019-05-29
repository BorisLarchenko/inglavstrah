(function () {
  function testKbmSteps(elem){
    console.log('hello kbm-steps!');
    console.log(elem);
    //find full form in full-request page
    const form = elem.querySelector('.test__form');

    const formStepsArr = form.querySelectorAll('.test__form-wrapper');
    console.log(formStepsArr);
    const btnForwardArr = form.querySelectorAll('.btn.test__btn');
    const btnBackArr = form.querySelectorAll('.btn-back.test__btn-back');
    console.log(btnBackArr);
    btnForwardArr[0].addEventListener('click', function (evt) {
      evt.preventDefault();
      formStepsArr[0].classList.remove('test__form-step13');
      formStepsArr[1].classList.add('test__form-step18');
    });
    for (let i = 1; i< formStepsArr.length-1; i++) {
      btnForwardArr[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        formStepsArr[i].classList.remove('test__form-step18');
        formStepsArr[i+1].classList.add('test__form-step18');
      });
    }


    btnBackArr[0].addEventListener('click', function (evt) {
      evt.preventDefault();
      formStepsArr[0].classList.add('test__form-step13');
      formStepsArr[1].classList.remove('test__form-step18');
    });

    btnBackArr[1].addEventListener('click', function (evt) {
      evt.preventDefault();
      formStepsArr[1].classList.add('test__form-step18');
      formStepsArr[2].classList.remove('test__form-step18');
    });


  }
  window.isElementPresent('.full-request--kbm', testKbmSteps);
})();