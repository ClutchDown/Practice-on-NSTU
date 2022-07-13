$(document).ready(function () {
  $("#my-form")
    .submit(function (e) {
      e.preventDefault();
    })
    .validate({
      focusInvalid: false,
      focusCleanup: true,
      rules: {
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          number: true, // <-- no such method called "matches"!
          minlength: 11,
          maxlength: 11,
        },
        country: "required",
      },
      messages: {
        email: {
          required: "Нужно указать email адрес",
          email: "Email адрес должен быть корректным",
        },
        phone: {
          required: "Укажите телефон!",
          number: "Введите корректный номер!",
          minlength: "Введите корректный номер!",
          maxlength: "Введите корректный номер!",
        },
        country: {
          required: "Выбирайте страну",
        },
      },
      errorPlacement: function (error, element) {
        var er = element.attr("name");
        error.appendTo(
          element
            .parent()
            .find("label[for='" + er + "']")
            .find("em")
        );
      },
    });
});
