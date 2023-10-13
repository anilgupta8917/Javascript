// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to handle the conversion and update the result on the webpage
function convertTemperature() {
    const celsiusInput = document.getElementById("celsiusInput");
    const resultElement = document.getElementById("result");

    const celsius = parseFloat(celsiusInput.value);
    
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius);
        resultElement.textContent = `Converted Temperature in Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
    }
}

// Attach the convertTemperature function to the button click event
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertTemperature);
