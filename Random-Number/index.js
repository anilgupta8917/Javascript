(() => {
    const generateRandomNumber = () => {
        const min = 1;
        const max = 100;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    };

    const generateButton = document.getElementById("generateButton");
    const randomNumberElement = document.getElementById("randomNumber");

    generateButton.addEventListener("click", () => {
        const randomNum = generateRandomNumber();
        randomNumberElement.textContent = randomNum;
    });
})();
