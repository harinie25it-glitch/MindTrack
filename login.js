document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email !== "" && password !== "") {

        localStorage.setItem("studentEmail", email);

        alert("Login successful! Welcome to MindTrack.");

        window.location.href = "dashboard.html";

    } else {

        alert("Please enter email and password.");

    }

});