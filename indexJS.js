// utils
const isValidEmail = (email) => {
  const pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  return pattern.test(String(email));
};

const isValidPhone = (phone) => {
  const pattern = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
  return pattern.test(String(phone));
};

const isValidCountry = (country) => country.length != 0;
// ----

const form = document.querySelector("#my-form");
form.addEventListener("submit", validateFormAndShowPopup);

function validateFormAndShowPopup(e) {
  e.preventDefault();

  const errorMessage = [];

  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const country = e.target.country.value;

  if (!isValidEmail(email)) errorMessage.push("Неверный email !");
  if (!isValidPhone(phone)) errorMessage.push("Неверный телефон !");
  if (!isValidCountry(country)) errorMessage.push("Не выбрана страна !");

  errorMessage.length == 0
    ? alert("Все заполнено успешно")
    : alert(errorMessage.join("\n"));
}
