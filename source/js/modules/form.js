(function () {

  $('.ui.dropdown').dropdown({
    // you can use any ui transition
    transition: 'drop'
  });
  //find form
  const form = document.querySelector('.test__form');
  console.log(form);
  // 1 block==========================================================
  //find current div
  const formStep1 = form.querySelector('.test__form-step1');
  //find second div
  const formStep2 = form.querySelector('.test__form-wrapper:nth-child(2)');
//  find button-forward
  const buttonForward1 = form.querySelector('.test__form-step1 .test__btn');

  buttonForward1.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep1.classList.remove('test__form-step1');
    formStep2.classList.add('test__form-step2');
  });
// =====================================================================
  //2 block =======================
  //find third div
  const formStep3 = form.querySelector('.test__form-wrapper:nth-child(3)');
  //find second button
  const buttonForward2 = form.querySelector('.test__form-wrapper:nth-child(2) .test__btn');

  buttonForward2.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep2.classList.remove('test__form-step2');
    formStep3.classList.add('test__form-step3');
  });

//  find back button
  const buttonBack2 = form.querySelector('.test__form-wrapper:nth-child(2) .btn-back');

  buttonBack2.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep2.classList.remove('test__form-step2');
    formStep1.classList.add('test__form-step1');
  });
//==========================================
  //3 block =======================
  //find third div
  const formStep4 = form.querySelector('.test__form-wrapper:nth-child(4)');
  //find second button
  const buttonForward3 = form.querySelector('.test__form-wrapper:nth-child(3) .test__btn');

  buttonForward3.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep3.classList.remove('test__form-step3');
    formStep4.classList.add('test__form-step4');
  });

  //  find back button
  const buttonBack3 = form.querySelector('.test__form-wrapper:nth-child(3) .btn-back');

  buttonBack3.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep3.classList.remove('test__form-step3');
    formStep2.classList.add('test__form-step2');
  });
//==========================================

  //4 block =======================
  //find third div
  const formStep5 = form.querySelector('.test__form-wrapper:nth-child(5)');
  //find second button
  const buttonForward4 = form.querySelector('.test__form-wrapper:nth-child(4) .test__btn');

  buttonForward4.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep4.classList.remove('test__form-step4');
    formStep5.classList.add('test__form-step5');
  });

  //  find back button
  const buttonBack4 = form.querySelector('.test__form-wrapper:nth-child(4) .btn-back');

  buttonBack4.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep4.classList.remove('test__form-step4');
    formStep3.classList.add('test__form-step3');
  });
//==========================================

  //5 block =======================
  //find third div
  const formStep6 = form.querySelector('.test__form-wrapper:nth-child(6)');
  //find second button
  const buttonForward5 = form.querySelector('.test__form-wrapper:nth-child(5) .test__btn');

  buttonForward5.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep5.classList.remove('test__form-step5');
    formStep6.classList.add('test__form-step6');
  });
  //  find back button
  const buttonBack5 = form.querySelector('.test__form-wrapper:nth-child(5) .btn-back');

  buttonBack5.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep5.classList.remove('test__form-step5');
    formStep4.classList.add('test__form-step4');
  });
//==========================================

  //6 block =======================
  //find third div
  const formStep7 = form.querySelector('.test__form-wrapper:nth-child(7)');
  //find second button
  const buttonForward6 = form.querySelector('.test__form-wrapper:nth-child(6) .test__btn');

  buttonForward6.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep6.classList.remove('test__form-step6');
    formStep7.classList.add('test__form-step7');
  });
  //  find back button
  const buttonBack6 = form.querySelector('.test__form-wrapper:nth-child(6) .btn-back');

  buttonBack6.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep6.classList.remove('test__form-step6');
    formStep5.classList.add('test__form-step5');
  });
//==========================================

  //7 block working with a new form =======================
  //find next form
  const form2 = document.querySelector('.test__form.test__form--invisible');
  console.log(form2);

  const form2Step1 = form2.querySelector('.test__form-wrapper:nth-child(1)');
  //find second button
  const buttonForward7 = form.querySelector('.test__form-wrapper:nth-child(7) .test__btn');

  buttonForward7.addEventListener('click', function (evt) {
    evt.preventDefault();
    formStep7.classList.remove('test__form-step7');
    form.classList.add('test__form--invisible');
    form2.classList.remove('test__form--invisible');
    form2Step1.classList.add('test__form-step8');
  });
//==========================================


  //8 block =======================
  //find next form

  const form2Step2 = form2.querySelector('.test__form-wrapper:nth-child(2)');
  //find second button
  const buttonForward8 = form2.querySelector('.test__form-wrapper:nth-child(1) .test__btn');

  buttonForward8.addEventListener('click', function (evt) {
    evt.preventDefault();
    form2Step1.classList.remove('test__form-step8');
    form2Step2.classList.add('test__form-step9');
  });
//==========================================


})();


