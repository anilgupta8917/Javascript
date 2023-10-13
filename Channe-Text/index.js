document.addEventListener("DOMContentLoaded", function () {
    const heading = document.getElementById("heading");
    const button = document.getElementById("toggleButton");
    let isToggled = false;

    button.addEventListener("click", function () {
        if (isToggled) {
            heading.textContent = "The most affordable learning platform";
        } else {
            heading.textContent = "PW Skills";
        }
        isToggled = !isToggled;
    });
});
