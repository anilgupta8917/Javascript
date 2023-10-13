document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email.includes("@") || password.length < 8) {
            message.textContent = "Invalid email or password!";
            message.classList.remove("success-message");
            message.classList.add("error-message");
        } else {
            message.textContent = "Valid email and password!";
            message.classList.remove("error-message");
            message.classList.add("success-message");
        }
    });
});
