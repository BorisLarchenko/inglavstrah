(function () {
  //find form
  const form = document.querySelector('.test__form');
  console.log(form);
//  find button-forward
  const buttonForwardOne = form.querySelector('.test__form-step1 .test__btn');
  //find current div
  const formStepOne = form.querySelector('.test__form-step1');
  console.log(formStepOne);
  //find next div
  const formStepTwo = form.querySelector('.test__form-step1 + div');
  console.log(formStepTwo);

  const formStepNth = form.querySelector('.test__form:nth-child(4)');
  console.log(formStepNth);

  buttonForwardOne.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStepOne.classList.remove('test__form-step1');
    formStepTwo.classList.add('test__form-step2');
  })

})();


