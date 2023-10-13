function calculateRentalCost(daysRented, carType) {
    let rentalCost = 0;
    
    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCost = 4000; // Rs. 4,000 per day for Economy
            break;
        case 'midsize':
            rentalCost = 15000; // Rs. 15,000 per day for Midsize
            break;
        case 'luxury':
            rentalCost = 20000; // Rs. 20,000 per day for Luxury
            break;
        default:
            return "Invalid car type";
    }
    
    return rentalCost * daysRented;
}

function calculateAndDisplayCost() {
    const carType = document.getElementById("carType").value;
    const daysRented = parseInt(document.getElementById("daysRented").value);
    const resultElement = document.getElementById("result");

    if (!isNaN(daysRented) && daysRented >= 1) {
        const totalCost = calculateRentalCost(daysRented, carType);
        resultElement.textContent = `Rental Cost: Rs. ${totalCost}`;
    } else {
        resultElement.textContent = "Please enter a valid number of days.";
    }
}

// Attach the calculateAndDisplayCost function to the button click event
const calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calculateAndDisplayCost);
