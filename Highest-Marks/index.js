// Function to find the highest marks using the ternary operator
const findHighestMarks = () => {
    const marks1 = parseFloat(document.getElementById('marks1').value);
    const marks2 = parseFloat(document.getElementById('marks2').value);
    const marks3 = parseFloat(document.getElementById('marks3').value);
    const marks4 = parseFloat(document.getElementById('marks4').value);
    const marks5 = parseFloat(document.getElementById('marks5').value);

    const highestMarks = Math.max(
        marks1,
        marks2,
        marks3,
        marks4,
        marks5
    );

    const resultElement = document.getElementById('result');
    resultElement.textContent = `The highest marks scored by a student is: ${highestMarks}`;
};


