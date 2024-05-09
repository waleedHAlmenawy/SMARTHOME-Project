function validatePassword() {
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("password2");
  var message = document.getElementById("message2");
  if (confirmPassword.value != password.value) {
    message.innerHTML = "Passwords do not match!";
    message.style.color = "red";
    document.getElementById("new").disabled = true;
  } else {
    message.innerHTML = "";
    document.getElementById("new").disabled = false;
  }
}
