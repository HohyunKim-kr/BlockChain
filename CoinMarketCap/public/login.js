const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  console.log(event);

  if (username === "user" && password === "web_dev") {
    alert("You have successfully logged in.");
    location.reload();
  } else {
    loginErrorMsg.style.opacity = 1;
  }
});
