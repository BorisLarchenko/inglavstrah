(function () {
  //find elements
  const btnTest = document.querySelector('.form__review .review-thanks-open');
  const blocksArr = document.querySelectorAll('.form__review .form__review-wrapper');
  //open/close blocksArr while btnTest is clicked
  if (blocksArr.length !== 0) {
    btnTest.addEventListener('click', function (evt) {
      evt.preventDefault();
      for (let i =0; i < blocksArr.length; i++) {
        blocksArr[i].classList.toggle('form__review-wrapper--close');
      }
    })
  }

})();

