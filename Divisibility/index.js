document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const checkButton = document.getElementById('checkButton');
    const resultElement = document.getElementById('result');

    checkButton.addEventListener('click', function () {
        const numbers = numberInput.value.split(',').map(num => parseInt(num.trim()));
        const divisibleBy3NotBy2 = [];

        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            if (num % 3 === 0 && num % 2 !== 0) {
                divisibleBy3NotBy2.push(num);
            }
        }

        resultElement.textContent = 'Numbers divisible by 3 but not by 2: ' + divisibleBy3NotBy2.join(', ');
    });
});


