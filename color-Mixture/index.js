function mixColors() {
    const color1 = document.getElementById('color1').value.toLowerCase();
    const color2 = document.getElementById('color2').value.toLowerCase();
    const result = document.getElementById('result');

    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    result.textContent = 'Purple';
                    break;
                case 'yellow':
                    result.textContent = 'Orange';
                    break;
                default:
                    result.textContent = 'Invalid color combination';
            }
            break;
        case 'blue':
            if (color2 === 'yellow') {
                result.textContent = 'Green';
            } else {
                result.textContent = 'Invalid color combination';
            }
            break;
        default:
            result.textContent = 'Invalid color combination';
    }
}
