document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateEmail();
  });

function validateEmail() {
  const emailInput = document.getElementById("email");
  const errorMessageDiv = document.getElementById("error-message");
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    errorMessageDiv.textContent = "Please enter a valid email address.";
    emailInput.classList.add("error-border");
  } else {
    errorMessageDiv.textContent = "";
    emailInput.classList.remove("error-border");
  }
}
