(function () {
  $(".input-readolny .input-readolny__btn").on("click", function () {
    $(this).prev().prop("readonly", false);
    $(this).prev().focus();
  });
  $(".input-readolny input").on("focusout", function () {
    $(this).prop("readonly", true);
  });
})();

