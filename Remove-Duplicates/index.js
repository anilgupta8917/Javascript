document.addEventListener('DOMContentLoaded', function () {
    const cartInput = document.getElementById('cartInput');
    const removeDuplicatesButton = document.getElementById('removeDuplicatesButton');
    const resultElement = document.getElementById('result');

    removeDuplicatesButton.addEventListener('click', function () {
        const cartItems = cartInput.value.split(',').map(item => item.trim());
        const uniqueItems = removeDuplicates(cartItems);

        resultElement.textContent = 'Cart without duplicates: ' + uniqueItems.join(', ');
    });

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }
});
