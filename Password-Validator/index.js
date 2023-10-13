document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const validateButton = document.getElementById("validateButton");
    const resultMessage = document.getElementById("resultMessage");

    validateButton.addEventListener("click", function () {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password === confirmPassword) {
            resultMessage.textContent = "Password Matched. Password validation Successful.";
        } else {
            resultMessage.textContent = "Password didn't match. Password validation unsuccessful";
        }
    });
});
