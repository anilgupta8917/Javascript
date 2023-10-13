function calculateBill() {
    const totalCost = parseFloat(document.getElementById('totalCost').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);

    if (isNaN(totalCost) || isNaN(numPeople) || totalCost <= 0 || numPeople <= 0) {
        document.getElementById('result').innerText = "Invalid input. Please enter valid numbers.";
    } else {
        const individualShare = totalCost / numPeople;
        const totalBill = totalCost;

        const result = {
            totalBill: totalBill,
            individualShare: individualShare
        };

        document.getElementById('result').innerText = `Total Bill: $${result.totalBill.toFixed(2)}\nIndividual Share: $${result.individualShare.toFixed(2)} per person`;
    }
}
