(function () {
  function testKbmSteps(elem){
    console.log('hello kbm-steps!');
    console.log(elem);
  }
  window.isElementPresent('.full-request--kbm', testKbmSteps);
})();