(function () {
  function testMot(elem) {
    console.log(`Hello from Technical Checkup`);
    const button3 = document.querySelector('.request__form-wrapper .request__btn');
    console.log(elem);

    const section1 = document.querySelector('.request__form-wrapper .request__form');

    const section2 = document.querySelector('.request__form-wrapper .request__form--mot2');

    button3.addEventListener('click', function (evt) {
      evt.preventDefault();
      section1.classList.add('request__form--mot-invisible');
      section2.classList.remove('request__form--mot-invisible');
    });
  //  =======================
    //find full form in full-request page
    const form = elem.querySelector('.test__form');
    console.log(form);
//  find first step div in form
    const formStep1 = form.querySelector('.test__form-step1');
//  find button .btn--all-cars in formStep1
    const btnShowFull = formStep1.querySelector('.btn--all-cars');

//  find first step div with full info about cars
    const formStep1Full = form.querySelector('.test__form-step1 + .test__form-wrapper');
//  find button .btn--all-cars in formStep1Full
    const btnShowLess = formStep1Full.querySelector('.btn--all-cars');

//  add evt listener on btnShowFull click
    btnShowFull.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep1.classList.remove('test__form-step1');
      formStep1Full.classList.add('test__form-step1');
    });

//  add evt listener on btnShowLess click
    btnShowLess.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep1.classList.add('test__form-step1');
      formStep1Full.classList.remove('test__form-step1');
    });


    // add ability to go to the second step clicking every car in list
//  find second step div in form
    const formStep2 = form.querySelector('.test__form-wrapper:nth-child(3)');
//  find all buttons with car`s names in formStep1
    const carNameArr = formStep1.querySelectorAll('.btn--data');

// add evt listener on all carNameArr elements click to go to the second step
    for (let i = 0; i < carNameArr.length; i++) {
      carNameArr[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        formStep2.classList.add('test__form-step2');
        formStep1.classList.remove('test__form-step1');
      });
    };

    //  find all buttons with car`s names in formStep1
    const carNameArrFull = formStep1Full.querySelectorAll('.btn--data');

// add evt listener on all carNameArr elements click to go to the second step
    for (let i = 0; i < carNameArrFull.length; i++) {
      carNameArrFull[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        formStep2.classList.add('test__form-step2');
        formStep1Full.classList.remove('test__form-step1');
      });
    };

    //2 block working with second step =======================
    //find third step div in form
    const formStep3 = form.querySelector('.test__form-wrapper:nth-child(4)');
    //find forward button in second step div
    const buttonForward2 = form.querySelector('.test__form-wrapper:nth-child(3) .test__btn');

// add evt listener on forward button click to go to the third step div
    buttonForward2.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep2.classList.remove('test__form-step2');
      formStep3.classList.add('test__form-step3');
    });

//  find back button in second step div
    const buttonBack2 = form.querySelector('.test__form-wrapper:nth-child(3) .btn-back');

    //add evt listener on backward button ckick to go to the second step div
    buttonBack2.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep2.classList.remove('test__form-step2');
      formStep1.classList.add('test__form-step1');
    });
//==========================================
    //3 block working with 3 step =======================
    //find third step div in form
    const formStep4 = form.querySelector('.test__form-wrapper:nth-child(5)');
    //find forward button in second step div
    const buttonForward3 = form.querySelector('.test__form-wrapper:nth-child(4) .test__btn');

// add evt listener on forward button click to go to the third step div
    buttonForward3.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep3.classList.remove('test__form-step3');
      formStep4.classList.add('test__form-step4');
    });

//  find back button in next step div
    const buttonBack3 = form.querySelector('.test__form-wrapper:nth-child(4) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack3.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep3.classList.remove('test__form-step3');
      formStep2.classList.add('test__form-step2');
    });
//==========================================

    //4 block working with 4 step =======================
    //find next step div in form
    const formStep5 = form.querySelector('.test__form-wrapper:nth-child(6)');
    //find forward button in current step div
    const buttonForward4 = form.querySelector('.test__form-wrapper:nth-child(5) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward4.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep4.classList.remove('test__form-step4');
      formStep5.classList.add('test__form-step5');
    });

//  find back button in current step div
    const buttonBack4 = form.querySelector('.test__form-wrapper:nth-child(5) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack4.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep4.classList.remove('test__form-step4');
      formStep3.classList.add('test__form-step3');
    });
//==========================================
    //5 block working with 5 step =======================
    //find next step div in form
    const formStep6 = form.querySelector('.test__form-wrapper:nth-child(7)');
    //find forward button in current step div
    const buttonForward5 = form.querySelector('.test__form-wrapper:nth-child(6) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward5.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep5.classList.remove('test__form-step5');
      formStep6.classList.add('test__form-step6');
    });

//  find back button in current step div
    const buttonBack5 = form.querySelector('.test__form-wrapper:nth-child(6) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack5.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep5.classList.remove('test__form-step5');
      formStep4.classList.add('test__form-step4');
    });
//==========================================
    //==========================================
    //6 block working with 6 step =======================
    //find next step div in form
    const formStep7 = form.querySelector('.test__form-wrapper:nth-child(8)');
    //find forward button in current step div
    const buttonForward6 = form.querySelector('.test__form-wrapper:nth-child(7) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward6.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep6.classList.remove('test__form-step6');
      formStep7.classList.add('test__form-step7');
    });

//  find back button in current step div
    const buttonBack6 = form.querySelector('.test__form-wrapper:nth-child(7) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack6.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep6.classList.remove('test__form-step6');
      formStep5.classList.add('test__form-step5');
    });
//==========================================
//7 block working with 7 step =======================
    //find next step div in form
    const formStep8 = form.querySelector('.test__form-wrapper:nth-child(9)');
    //find forward button in current step div
    const buttonForward7 = form.querySelector('.test__form-wrapper:nth-child(8) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward7.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep7.classList.remove('test__form-step7');
      formStep8.classList.add('test__form-step8');
    });

//  find back button in current step div
    const buttonBack7 = form.querySelector('.test__form-wrapper:nth-child(8) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack7.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep7.classList.remove('test__form-step7');
      formStep6.classList.add('test__form-step6');
    });
//==========================================



  }
  window.isElementPresent('.main__form-test--mot', testMot);
})();