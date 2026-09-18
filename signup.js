document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const password = document.getElementById("studentPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check password
    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }

    // Save student information locally
    const student = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("mindtrackStudent", JSON.stringify(student));

    alert("Account created successfully!");

    // Go to login page
    window.location.href = "login.html";

});