function login() {
  let email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter mobile or email");
    return;
  }

  alert("Login successful ");
}
