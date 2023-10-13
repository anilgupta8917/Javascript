const calculateDiscount = () => {
    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discountedPrice = parseFloat(document.getElementById("discountedPrice").value);

    if (isNaN(originalPrice) || isNaN(discountedPrice) || originalPrice <= 0 || discountedPrice <= 0) {
        alert("Please enter valid prices.");
        return;
    }

    const percentageDiscount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    const percentageDiscountElement = document.getElementById("percentageDiscount");
    percentageDiscountElement.textContent = percentageDiscount.toFixed(2) + "%";
};
