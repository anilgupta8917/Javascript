function generatePattern() {
    const rows = document.getElementById('rows').value;
    let pattern = '';

    // Check if the input is a valid number
    if (isNaN(rows) || rows <= 0) {
        pattern = 'Invalid input. Please enter a positive number.';
    } else {
        // Generate the inverted right-angled triangle pattern
        for (let i = rows; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                pattern += '*';
            }
            pattern += '<br>';
        }
    }

    document.getElementById('pattern').innerHTML = pattern;
}
