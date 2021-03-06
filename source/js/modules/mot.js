(function () {
  function testMot(elem) {
    $('.calendar-label-date').calendar({
      type: 'date',
      startMode: 'year',
      monthFirst: false,
      text: {
        days: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Окрябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        now: 'Сейчас'
      },
    });


    $('.ui.dropdown').dropdown();

    const button3 = document.querySelector('.request__form-wrapper .request__btn');


    const section1 = document.querySelector('.request__form-wrapper .request__form');

    const section2 = document.querySelector('.request__form-wrapper .request__form--mot2');

    button3.addEventListener('click', function (evt) {
      evt.preventDefault();
      section1.classList.add('request__form--mot-invisible');
      section2.classList.remove('request__form--mot-invisible');
    });

    const containerFirst = elem.querySelector('.container--mot');
    const containerSecond = elem.querySelector('.container--mot + .container');
    const button1 = elem.querySelector('.modal__reg-link.request__mark-link');
    console.log(containerFirst);
    console.log(button1);
    button1.addEventListener('click', function (evt) {
      evt.preventDefault();
      containerFirst.classList.add('container--mot-invisible');
      containerSecond.classList.remove('container--mot-invisible');
    });


  //  =======================
    //find full form in full-request page
    const form = elem.querySelector('.test__form');
//  find first step div in form
    const formStep1 = form.querySelector('.test__form-step1');
//  find button .btn--all-cars in formStep1
    const btnShowFull = formStep1.querySelector('.btn--all-cars');

//  find first step div with full info about cars
    const formStep1Full = form.querySelector('.test__form-step1 + .test__form-wrapper');
//  find button .btn--all-cars in formStep1Full
    //  add evt listener on btnShowFull click
    btnShowFull.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep1.classList.remove('test__form-step1');
      formStep1Full.classList.add('test__form-step1');
    });


//  find second step div in form
    const formStep2 = form.querySelector('.test__form-wrapper:nth-child(3)');


//----- dlock that should be modified ------------------------------
//     it is not needed now
    const btnShowBack = formStep1Full.querySelector('.btn-back');
//  add evt listener on btnShowLess click
    btnShowBack.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep1.classList.add('test__form-step1');
      formStep1Full.classList.remove('test__form-step1');
    });
    //  find all buttons with car`s names in formStep1
    const btnShowForward = formStep1Full.querySelector('.test__btn');
    // add evt listener on forward button click to go to the second step div
    console.log(btnShowForward);
    btnShowForward.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep1Full.classList.remove('test__form-step1');
      formStep2.classList.add('test__form-step2');
    });



//    ----- end of modified block -------------------------------------









    // add ability to go to the second step clicking every car in list

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


    //8 block working with 8 step =======================
    //find next step div in form
    const formStep9 = form.querySelector('.test__form-wrapper:nth-child(10)');
    //find forward button in current step div
    const buttonForward8 = form.querySelector('.test__form-wrapper:nth-child(9) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward8.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep8.classList.remove('test__form-step8');
      formStep9.classList.add('test__form-step9');
    });

//  find back button in current step div
    const buttonBack8 = form.querySelector('.test__form-wrapper:nth-child(9) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack8.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep8.classList.remove('test__form-step8');
      formStep7.classList.add('test__form-step7');
    });
//==========================================
    //9 block working with 9 step =======================
    //find next step div in form
    const formStep10 = form.querySelector('.test__form-wrapper:nth-child(11)');
    //find forward button in current step div
    const buttonForward9 = form.querySelector('.test__form-wrapper:nth-child(10) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward9.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep9.classList.remove('test__form-step9');
      formStep10.classList.add('test__form-step10');
    });

//  find back button in current step div
    const buttonBack9 = form.querySelector('.test__form-wrapper:nth-child(10) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack9.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep9.classList.remove('test__form-step9');
      formStep8.classList.add('test__form-step8');
    });
//==========================================
    //10 block working with 10-1 step =======================
    //find next step div in form
    const formStep10Next = form.querySelector('.test__form-wrapper:nth-child(12)');
    //find forward button in current step div
    const buttonForward10 = form.querySelector('.test__form-wrapper:nth-child(11) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward10.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep10.classList.remove('test__form-step10');
      formStep10Next.classList.add('test__form-step10');
    });

//  find back button in current step div
    const buttonBack10 = form.querySelector('.test__form-wrapper:nth-child(11) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack10.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep10.classList.remove('test__form-step10');
      formStep9.classList.add('test__form-step9');
    });
//==========================================
    //==========================================
    //10 block working with 10-2 step =======================
    //find next step div in form
    const formStep11 = form.querySelector('.test__form-wrapper:nth-child(13)');
    //find forward button in current step div
    const buttonForward10Next = form.querySelector('.test__form-wrapper:nth-child(12) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward10Next.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep10Next.classList.remove('test__form-step10');
      formStep11.classList.add('test__form-step11');
    });

//  find back button in current step div
    const buttonBack10Next = form.querySelector('.test__form-wrapper:nth-child(12) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack10Next.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep10Next.classList.remove('test__form-step10');
      formStep10.classList.add('test__form-step10');
    });
//==========================================
    //==========================================
    //11 block working with 11 step =======================
    //find next step div in form
    const formStep12 = form.querySelector('.test__form-wrapper:nth-child(14)');
    //find forward button in current step div
    const buttonForward11 = form.querySelector('.test__form-wrapper:nth-child(13) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward11.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep11.classList.remove('test__form-step11');
      formStep12.classList.add('test__form-step12');
    });

//  find back button in current step div
    const buttonBack11 = form.querySelector('.test__form-wrapper:nth-child(13) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack11.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep11.classList.remove('test__form-step11');
      formStep10Next.classList.add('test__form-step10');
    });
//==========================================
//==========================================
    //12 block working with 12 step =======================
    //find next step div in form
    const formStep12Second = form.querySelector('.test__form-wrapper:nth-child(15)');
    //find forward button in current step div
    const buttonForward12 = form.querySelector('.test__form-wrapper:nth-child(14) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward12.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep12.classList.remove('test__form-step12');
      formStep12Second.classList.add('test__form-step12');
    });

//  find back button in current step div
    const buttonBack12 = form.querySelector('.test__form-wrapper:nth-child(14) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack12.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep12.classList.remove('test__form-step12');
      formStep11.classList.add('test__form-step11');
    });
//==========================================
    //==========================================
    //12 block working with 12-2 step =======================
    //find next step div in form
    const formStep12Third = form.querySelector('.test__form-wrapper:nth-child(16)');
    //find forward button in current step div
    const buttonForward12Second = form.querySelector('.test__form-wrapper:nth-child(15) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward12Second.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep12Second.classList.remove('test__form-step12');
      formStep12Third.classList.add('test__form-step12');
    });

//  find back button in current step div
    const buttonBack12Seccond = form.querySelector('.test__form-wrapper:nth-child(15) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack12Seccond.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep12Second.classList.remove('test__form-step12');
      formStep12.classList.add('test__form-step12');
    });
//==========================================

    //==========================================
    //12 block working with 12-3 step =======================
    //find forward button in current step div
   /* const buttonForwardLast = form.querySelector('.test__form-wrapper:nth-child(16) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForwardLast.addEventListener('click', function (evt) {
      evt.preventDefault();
      console.log(this);
      location.href = 'http://full-request.html';
    });*/
//==========================================

  }
  window.isElementPresent('.main__form-test--mot', testMot);
})();