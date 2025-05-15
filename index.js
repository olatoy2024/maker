let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeIcon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "/images/eye-line.svg";
  } else {
    password.type = "password";
    eyeIcon.src = "/images/password-close-blind.png";
  }
};
