(function () {
//  find Enter entity block that asks authorisation
  let loginArr = document.querySelectorAll('.header__login');

//  find additional elements that ask for authorization
  const loginAdditinalElem = document.querySelector('.form__review .form__personal-link');
  console.log(loginAdditinalElem);
  if (loginAdditinalElem !== undefined && loginAdditinalElem !== null) {
     loginArr = Array.from(loginArr);
     loginArr.push(loginAdditinalElem);
     console.log(loginArr);
  }

//  find overlay window
  const overlay = document.querySelector('.modal__overlay');

//  find auth blocks===========
  const authWrap = document.querySelector('.modal--enter');
//  modal__auth
  const auth = authWrap.querySelector('.modal__auth');
//  modal__forgot-pass
  const forgotPass = authWrap.querySelector('.modal__forgot-pass');
// ==================

//  activate overlay, authWrap and auth while clicking login
  for(let i = 0; i < loginArr.length; i++) {
    loginArr[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      overlay.classList.add('modal--active');
      authWrap.classList.add('modal--active');
      auth.classList.add('modal--active');
    });

  }

//  find all modal__close buttons
  const allCloseButtons = document.querySelectorAll('.modal__close');

//  delete .modal--active from all elements
for (let i = 0; i < allCloseButtons.length; i++) {
  allCloseButtons[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    const activeElem = document.querySelectorAll('.modal--active');
    for (let n = 0; n < activeElem.length; n++) {
      activeElem[n].classList.remove('modal--active');
    }
  })
}

//find forgot password link .modal__pass-link
  const passLink = auth.querySelector('.modal__pass-link');
  passLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    auth.classList.remove('modal--active');
    forgotPass.classList.add('modal--active');
  });
//find back link in forgotPass section .modal__reg-link
  const backLink = forgotPass.querySelector('.modal__reg-link');
  backLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    auth.classList.add('modal--active');
    forgotPass.classList.remove('modal--active');
  });
  //start working with registration window=======
  //find registration blocks============
  const regWrap = document.querySelector('.modal--reg');
//  modal__auth
  const regThanks = regWrap.querySelector('.modal__aouth--reg + .modal__auth');
//  modal__forgot-pass
  const reg = regWrap.querySelector('.modal__aouth--reg');
  // ===================

  //find back link in auth section .modal__reg-link
  const backLinkAuth = auth.querySelector('.modal__reg-link');
  backLinkAuth.addEventListener('click', function (evt) {
    evt.preventDefault();
    auth.classList.remove('modal--active');
    forgotPass.classList.remove('modal--active');
    regWrap.classList.add('modal--active');
    reg.classList.add('modal--active');

  });

  //find forgot password link .modal__pass-link in reg window
  const alreaddyRegLink = reg.querySelector('.modal__reg-link');
  alreaddyRegLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    reg.classList.remove('modal--active');
    auth.classList.add('modal--active');
  });


  //find modal button .btn__modal in reg window
  const makeReg = reg.querySelector('.btn__modal');
  makeReg.addEventListener('click', function (evt) {
    evt.preventDefault();
    reg.classList.remove('modal--active');
    regThanks.classList.add('modal--active');
  });
//  find open/close block in reg window div.modal__show-hide--open

  const showAddInfo = reg.querySelector('.modal__show-hide');
  const lebelsArr = showAddInfo.querySelectorAll('.modal__checkbox-text');
  //add onclick event listeners to all lebelArr elements
  for (let i=0; i < lebelsArr.length; i++) {
    lebelsArr[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      showAddInfo.classList.toggle('modal__show-hide--open');
    })
  }

//find back-link to the main page .modal__reg-link
  const backLinkMain = regThanks.querySelector('.modal__reg-link');
  backLinkMain.addEventListener('click', function (evt) {
    evt.preventDefault();
    reg.classList.remove('modal--active');
    regThanks.classList.remove('modal--active');
    overlay.classList.remove('modal--active');
    window.location = '/index.html';
  });


})();