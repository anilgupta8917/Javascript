const movingImage = document.getElementById('movingImage');
const step = 10; // Number of pixels to move on each arrow key press

// Function to move the image
function moveImage(event) {
    switch (event.key) {
        case 'ArrowUp':
            movingImage.style.top = `${parseInt(movingImage.style.top) - step}px`;
            break;
        case 'ArrowDown':
            movingImage.style.top = `${parseInt(movingImage.style.top) + step}px`;
            break;
        case 'ArrowLeft':
            movingImage.style.left = `${parseInt(movingImage.style.left) - step}px`;
            break;
        case 'ArrowRight':
            movingImage.style.left = `${parseInt(movingImage.style.left) + step}px`;
            break;
    }
}

// Event listener for arrow key presses
document.addEventListener('keydown', moveImage);
