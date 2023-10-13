document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const countButton = document.getElementById('countButton');
    const resultElement = document.getElementById('result');

    countButton.addEventListener('click', function () {
        const enteredName = nameInput.value.trim().toLowerCase();
        let vowelCount = 0;

        for (let i = 0; i < enteredName.length; i++) {
            const char = enteredName.charAt(i);
            if (isVowel(char)) {
                vowelCount++;
            }
        }

        resultElement.textContent = `Number of vowels: ${vowelCount}`;
    });

    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].includes(char);
    }
});
