(function () {
  function testKasko(elem) {
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


    $('.ui.dropdown').dropdown({
      // you can use any ui transition
      transition: 'drop'
    });
    //find full form in full-request page
    const form = document.querySelector('.full-request .test__form');
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
    }
    ;

    //  find all buttons with car`s names in formStep1
    const carNameArrFull = formStep1Full.querySelectorAll('.btn--data');

// add evt listener on all carNameArr elements click to go to the second step
    for (let i = 0; i < carNameArrFull.length; i++) {
      carNameArrFull[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        formStep2.classList.add('test__form-step2');
        formStep1Full.classList.remove('test__form-step1');
      });
    }
    ;

//  ===========================================================================

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

    //5 first block working with 5-1 step special block as there are two 5 steps=======================
    //find next step div in form
    const formStep5Next = form.querySelector('.test__form-wrapper:nth-child(6)');
    //find forward button in current step div
    const buttonForward5 = form.querySelector('.test__form-wrapper:nth-child(6) .test__btn');

    // add evt listener on forward button click to go to the current step div
   /* buttonForward5.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep5.classList.remove('test__form-step5');
      formStep5Next.classList.add('test__form-step5');
    });

    //  find back button in current step div
    const buttonBack5 = form.querySelector('.test__form-wrapper:nth-child(6) .btn-back');

    //add evt listener on backward button click to go to the prev step div
    buttonBack5.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep5.classList.remove('test__form-step5');
      formStep4.classList.add('test__form-step4');
    });*/
    //==========================================


    //5next block working with 5-2 step for real it is 5-1 step =======================
    //find next step div in form
    const formStep6 = form.querySelector('.test__form-wrapper:nth-child(8)');
    //find forward button in current step div
    const buttonForward5Next = form.querySelector('.test__form-wrapper:nth-child(6) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward5Next.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep5Next.classList.remove('test__form-step5');
      formStep6.classList.add('test__form-step6');
    });

//  find back button in current step div
    const buttonBack5Next = form.querySelector('.test__form-wrapper:nth-child(6) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack5Next.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep5Next.classList.remove('test__form-step5');
      formStep1.classList.add('test__form-step1');
    });
//==========================================


    //6 block working with 6 step =======================
    //find next step div in form
    const formStep7 = form.querySelector('.test__form-wrapper:nth-child(9)');
    //find forward button in current step div
    const buttonForward6 = form.querySelector('.test__form-wrapper:nth-child(8) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward6.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep6.classList.remove('test__form-step6');
      formStep7.classList.add('test__form-step7');
    });

//  find back button in current step div
    const buttonBack6 = form.querySelector('.test__form-wrapper:nth-child(8) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack6.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep6.classList.remove('test__form-step6');
      formStep5Next.classList.add('test__form-step5');
    });
//==========================================

    //7 block working with 7 step =======================
    //find next step div in form
    const formStep8 = form.querySelector('.test__form-wrapper:nth-child(10)');
    //find forward button in current step div
    const buttonForward7 = form.querySelector('.test__form-wrapper:nth-child(9) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward7.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep7.classList.remove('test__form-step7');
      formStep8.classList.add('test__form-step8');
    });

//  find back button in current step div
    const buttonBack7 = form.querySelector('.test__form-wrapper:nth-child(9) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack7.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep7.classList.remove('test__form-step7');
      formStep6.classList.add('test__form-step6');
    });
//==========================================

    //8 block working with 8 step =======================
    //find next step div in form
    const formStep9 = form.querySelector('.test__form-wrapper:nth-child(11)');
    //find forward button in current step div
    const buttonForward8 = form.querySelector('.test__form-wrapper:nth-child(10) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward8.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep8.classList.remove('test__form-step8');
      formStep9.classList.add('test__form-step9');
    });

//  find back button in current step div
    const buttonBack8 = form.querySelector('.test__form-wrapper:nth-child(10) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack8.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep8.classList.remove('test__form-step8');
      formStep7.classList.add('test__form-step7');
    });
//==========================================

    //9 block working with 9 step =======================
    //find next step div in form
    const formStep10 = form.querySelector('.test__form-wrapper:nth-child(12)');
    //find forward button in current step div
    const buttonForward9 = form.querySelector('.test__form-wrapper:nth-child(11) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward9.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep9.classList.remove('test__form-step9');
      formStep10.classList.add('test__form-step10');
    });

//  find back button in current step div
    const buttonBack9 = form.querySelector('.test__form-wrapper:nth-child(11) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack9.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep9.classList.remove('test__form-step9');
      formStep8.classList.add('test__form-step8');
    });
//==========================================
    //10 block working with 10 step =======================
    //find next step div in form
    const formStep11 = form.querySelector('.test__form-wrapper:nth-child(13)');
    //find forward button in current step div
    const buttonForward10 = form.querySelector('.test__form-wrapper:nth-child(12) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward10.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep10.classList.remove('test__form-step10');
      formStep11.classList.add('test__form-step11');
    });

//  find back button in current step div
    const buttonBack10 = form.querySelector('.test__form-wrapper:nth-child(12) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack10.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep10.classList.remove('test__form-step10');
      formStep9.classList.add('test__form-step9');
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
      formStep10.classList.add('test__form-step10');
    });
//==========================================

    //start blocks for step 2 from 4 steps
    //==========================================
    //12 block working with 12 step =======================
    //find next step div in form
    const formStep13 = form.querySelector('.test__form-wrapper:nth-child(15)');
    //find forward button in current step div
    const buttonForward12 = form.querySelector('.test__form-wrapper:nth-child(14) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward12.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep12.classList.remove('test__form-step12');
      formStep13.classList.add('test__form-step13');
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

    //13 block working with 13-1 step =======================
    //find next step div in form
    const formStep13Second = form.querySelector('.test__form-wrapper:nth-child(16)');
    //find forward button in current step div
    const buttonForward13 = form.querySelector('.test__form-wrapper:nth-child(15) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward13.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep13.classList.remove('test__form-step13');
      formStep13Second.classList.add('test__form-step13');
    });

//  find back button in current step div
    const buttonBack13 = form.querySelector('.test__form-wrapper:nth-child(15) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack13.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep13.classList.remove('test__form-step13');
      formStep12.classList.add('test__form-step12');
    });
//==========================================

    //14 block working with 13-2 step =======================
    //find next step div in form
    const formStep14 = form.querySelector('.test__form-wrapper:nth-child(17)');
    //find forward button in current step div
    const buttonForward13Second = form.querySelector('.test__form-wrapper:nth-child(16) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward13Second.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep13Second.classList.remove('test__form-step13');
      formStep14.classList.add('test__form-step14');
    });

//  find back button in current step div
    const buttonBack13Second = form.querySelector('.test__form-wrapper:nth-child(16) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack13Second.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep13Second.classList.remove('test__form-step13');
      formStep13.classList.add('test__form-step13');
    });
//==========================================

    //15 block working with 14 step =======================
    //find next step div in form
    const formStep15 = form.querySelector('.test__form-wrapper:nth-child(18)');
    //find forward button in current step div
    const buttonForward14 = form.querySelector('.test__form-wrapper:nth-child(17) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward14.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep14.classList.remove('test__form-step14');
      formStep15.classList.add('test__form-step15');
    });

//  find back button in current step div
    const buttonBack14 = form.querySelector('.test__form-wrapper:nth-child(17) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack14.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep14.classList.remove('test__form-step14');
      formStep13Second.classList.add('test__form-step13');
    });
//==========================================
    //16 block working with 15 step =======================
    //find next step div in form
    const formStep16 = form.querySelector('.test__form-wrapper:nth-child(19)');
    //find forward button in current step div
    const buttonForward15 = form.querySelector('.test__form-wrapper:nth-child(18) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward15.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep15.classList.remove('test__form-step15');
      formStep16.classList.add('test__form-step16');
    });

//  find back button in current step div
    const buttonBack15 = form.querySelector('.test__form-wrapper:nth-child(18) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack15.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep15.classList.remove('test__form-step15');
      formStep14.classList.add('test__form-step14');
    });
//==========================================

    //==========================================
    //17 block working with 16 step =======================
    //find next step div in form
    const formStep16Next = form.querySelector('.test__form-wrapper:nth-child(20)');
    //find forward button in current step div
    const buttonForward16 = form.querySelector('.test__form-wrapper:nth-child(19) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward16.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep16.classList.remove('test__form-step16');
      formStep16Next.classList.add('test__form-step16');
    });

//  find back button in current step div
    const buttonBack16 = form.querySelector('.test__form-wrapper:nth-child(19) .test__btn-wrapper .btn-back');
    console.log(buttonBack16);
    //add evt listener on backward button ckick to go to the prev step div
    buttonBack16.addEventListener('click', function (evt) {
      evt.preventDefault();
      console.log(buttonBack16);
      formStep16.classList.remove('test__form-step16');
      formStep15.classList.add('test__form-step15');
    });
//==========================================

    //==========================================
    //19 block working with 16-2 step =======================
    //find next step div in form
    const formStep17 = form.querySelector('.test__form-wrapper:nth-child(21)');
    //find forward button in current step div
    const buttonForward16Next = form.querySelector('.test__form-wrapper:nth-child(20) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward16Next.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep16Next.classList.remove('test__form-step16');
      formStep17.classList.add('test__form-step17');
    });

//  find back button in current step div
    const buttonBack16Next = form.querySelector('.test__form-wrapper:nth-child(20) .test__btn-wrapper .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack16Next.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep16Next.classList.remove('test__form-step16');
      formStep16.classList.add('test__form-step16');
    });
//==========================================
    //==========================================
    //20 block working with 17 step =======================
    //find next step div in form
    const formStep18 = form.querySelector('.test__form-wrapper:nth-child(22)');
    //find forward button in current step div
    const buttonForward17 = form.querySelector('.test__form-wrapper:nth-child(21) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward17.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep17.classList.remove('test__form-step17');
      formStep18.classList.add('test__form-step18');
    });

//  find back button in current step div
    const buttonBack17 = form.querySelector('.test__form-wrapper:nth-child(21) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack17.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep17.classList.remove('test__form-step17');
      formStep16Next.classList.add('test__form-step16');
    });
//==========================================
    //==========================================
    //21 block working with 18-1 step =======================
    //find next step div in form
    const formStep18Second = form.querySelector('.test__form-wrapper:nth-child(23)');
    //find forward button in current step div
    const buttonForward18 = form.querySelector('.test__form-wrapper:nth-child(22) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward18.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep18.classList.remove('test__form-step18');
      formStep18Second.classList.add('test__form-step18');
    });

//  find back button in current step div
    const buttonBack18 = form.querySelector('.test__form-wrapper:nth-child(22) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack18.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep18.classList.remove('test__form-step18');
      formStep17.classList.add('test__form-step17');
    });
//==========================================

    //==========================================
    //22 block working with 18-2 step =======================
    //find next step div in form
    const formStep18Third = form.querySelector('.test__form-wrapper:nth-child(24)');
    //find forward button in current step div
    const buttonForward18Second = form.querySelector('.test__form-wrapper:nth-child(23) .test__btn');

// add evt listener on forward button click to go to the current step div
    buttonForward18Second.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep18Second.classList.remove('test__form-step18');
      formStep18Third.classList.add('test__form-step18');
    });

//  find back button in current step div
    const buttonBack18Second = form.querySelector('.test__form-wrapper:nth-child(23) .btn-back');

    //add evt listener on backward button ckick to go to the prev step div
    buttonBack18Second.addEventListener('click', function (evt) {
      evt.preventDefault();
      formStep18Second.classList.remove('test__form-step18');
      formStep18.classList.add('test__form-step18');


    });
//==========================================
  }
  window.isElementPresent('.main--kasko', testKasko);
})();