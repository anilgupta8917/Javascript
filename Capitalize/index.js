document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const capitalizeButton = document.getElementById('capitalizeButton');
    const resultElement = document.getElementById('result');

    capitalizeButton.addEventListener('click', function () {
        const enteredName = nameInput.value.trim();

        if (enteredName.length > 0) {
            const capitalizedName = enteredName.charAt(0).toUpperCase() + enteredName.slice(1);
            resultElement.textContent = `Capitalized Name: ${capitalizedName}`;
        } else {
            resultElement.textContent = 'Please enter a valid name.';
        }
    });
});
