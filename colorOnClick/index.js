const colors = ['#FF5733', '#FFC300', '#36D7B7', '#4A90E2', '#C71585', '#9A32CD', '#FF4500', '#008080', '#20B2AA', '#8B4513'];

function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', changeColor);
