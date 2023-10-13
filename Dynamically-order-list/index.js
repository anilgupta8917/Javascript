// Pre-existing array of list items
const learnItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Web Design",
    "Version Control",
    "JavaScript Frameworks",
    "APIs and AJAX",
    "Backend Development",
    "Database Management"
];

let currentIndex = 0; // Variable to keep track of the current index of the array

function addNewItem() {
    const learnList = document.getElementById('learnList');

    // Check if there are remaining items in the array
    if (currentIndex < learnItems.length) {
        const newItem = document.createElement('li');
        newItem.textContent = learnItems[currentIndex];
        learnList.appendChild(newItem);
        currentIndex++;
    } else {
        alert("No more items to add!");
    }
}
