document.addEventListener("DOMContentLoaded", function () {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const operatorInput = document.getElementById("operator");
    const calculateButton = document.getElementById("calculateButton");
    const resultMessage = document.getElementById("resultMessage");

    calculateButton.addEventListener("click", function () {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operator = operatorInput.value;
        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    resultMessage.textContent = "Division by zero is not allowed.";
                    return;
                }
                break;
            default:
                resultMessage.textContent = "Invalid operator";
                return;
        }

        resultMessage.textContent = `Result: ${result}`;
    });
});
