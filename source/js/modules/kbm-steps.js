(function () {
  function testKbmSteps(elem){
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
    //find full form in full-request page
    const form = elem.querySelector('.test__form');

    const formStepsArr = form.querySelectorAll('.test__form-wrapper');
    console.log(formStepsArr);
    const btnForwardArr = form.querySelectorAll('.btn.test__btn');
    const btnBackArr = form.querySelectorAll('.btn-back.test__btn-back');
    console.log(btnBackArr);
    btnForwardArr[0].addEventListener('click', function (evt) {
      evt.preventDefault();
      formStepsArr[0].classList.remove('test__kbm-step1');
      formStepsArr[1].classList.add('test__kbm-step2');
    });
    for (let i = 1; i< formStepsArr.length-1; i++) {
      btnForwardArr[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        formStepsArr[i].classList.remove('test__kbm-step2');
        formStepsArr[i+1].classList.add('test__kbm-step2');
      });
    }


    btnBackArr[0].addEventListener('click', function (evt) {
      evt.preventDefault();
      formStepsArr[0].classList.add('test__kbm-step1');
      formStepsArr[1].classList.remove('test__kbm-step2');
    });

    btnBackArr[1].addEventListener('click', function (evt) {
      evt.preventDefault();
      formStepsArr[1].classList.add('test__kbm-step2');
      formStepsArr[2].classList.remove('test__kbm-step2');
    });


  }
  window.isElementPresent('.full-request--kbm', testKbmSteps);
})();