const form = document.getElementById("form");
const fullName = document.querySelector("#fullName");
const email = document.getElementById("email");
let eyeIcon = document.getElementById("eyeicon");
const password = document.getElementById("password");
const confirmPassword = document.querySelector("#confirmPassword");
const eyeIconTwo = document.getElementById("eyeicon2");

eyeIcon.onclick = function () {
  if (password.type === "password") {
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

form.addEventListener("submit", (e) => {
  // e.preventDefault();

  const errors = [];

  if (fullName) {
    // if we have the full Name input then, we are in the sign up

    errors = getSignUpFormErrors(
      fullName.value,
      email.value,
      password.value,
      confirmPassword.value
    );
  } else {
    // if we don't have full name input, then we are in the sign in button
    errors = getSignInFormErrors(email.value, password.value);
  }
});

function getSignUpFormErrors(fullName, email, password, confirmPassword) {
  let errors = [];
  if (!fullName === "" || fullName === null) {
    // errors.push("Full Name is Required");
  }
}
