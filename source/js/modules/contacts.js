(function () {
  var shopsTown = document.querySelector('.shops__town');


  shopsTown.addEventListener('click', function() {
    shopsTown.classList.toggle('shops__town--open');
  });
})();