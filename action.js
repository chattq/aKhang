//validate
var validateName = document.querySelector(".validate-Name");
var validateContent = document.querySelector(".validate-Content");
var validateEmail = document.querySelector(".validate-Email");
// get value input
let inputName = document.querySelector(".name");
let inputEmail = document.querySelector(".email");
let inputContent = document.querySelector(".content");

// action
const btnsubmitwish = document.querySelector(".btn-submit-wish");
btnsubmitwish.addEventListener("click", handleSubmit);
function handleSubmit(e) {
  let inputName = document.querySelector(".name");
  let inputEmail = document.querySelector(".email");
  let inputContent = document.querySelector(".content");
  if (inputContent.value.trim() === "") {
    validateContent.style.display = "block";
  } else if (inputContent.value.trim().length <= 10) {
    validateContent.innerText = "Lời chúc phải lớn hơn 10 ký tự.";
  } else {
    validateContent.style.display = "none";
  }
  if (inputName.value.trim() === "") {
    validateName.style.display = "block";
  } else {
    validateName.style.display = "none";
  }

  if (inputEmail.value.trim() !== "") {
    if (!isValidEmail(inputEmail.value)) {
      validateEmail.innerText = "Email không đúng định dạng";
      validateEmail.style.display = "block";
    } else {
      validateEmail.style.display = "none";
    }
  }
}
function isValidEmail(email) {
  // Regular expression for validating an Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
