"use strict";

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("submit", function (e) {
    e.preventDefault(); // default event of submitting got prevented.
    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // console.log(this);

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (name.length < 3) {
      document.getElementById("nameError").textContent =
        "Name must be at least 3 characters long.";
      isValid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Phone number must be 10 digits.";
      isValid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Enter a valid email address.";
      isValid = false;
    }

    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters long.";
      isValid = false;
    }

    if (isValid) {
      console.log(name);
      console.log(phone);
      console.log(email);
      console.log(password);
      alert("Form submitted successfully!");

      document.getElementById("form").submit();
    }
  });
});
