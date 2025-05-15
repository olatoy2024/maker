const form = document.getElementById("form");
const fullName = document.querySelector("#fullName");
const email = document.getElementById("email");
let eyeIcon = document.getElementById("eyeicon");
const password = document.getElementById("password");
const confirmPassword = document.querySelector("#confirmPassword");
const eyeIconTwo = document.getElementById("eyeicon2");
eyeIcon.onclick = function () {
  if ((password.type === "password") === "password") {
    password.type = "text";

    eyeIcon.src = "/images/eye-line.svg";
  } else {
    password.type = "password";
    eyeIcon.src = "/images/password-close-blind.png";
  }
};

eyeIconTwo.onclick = function () {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    eyeIconTwo.src = "./images/eye-line.svg";
  } else {
    confirmPassword.type = "password";
    eyeIcon.src = "./images/password-close-blind.png";
  }
};
