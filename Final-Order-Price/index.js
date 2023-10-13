function calculateTotal() {
    const price1 = document.getElementById('price1').innerText;
    const quantity1 = document.getElementById('quantity1').value;
    const price2 = document.getElementById('price2').innerText;
    const quantity2 = document.getElementById('quantity2').value;

    const totalPrice = (price1 * quantity1) + (price2 * quantity2);
    document.getElementById('totalPrice').innerText = totalPrice;
}



