document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button>Delete</button>
            `;
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";

            // Attach event listener to delete button
            const deleteButton = listItem.querySelector("button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });

    // Handle Enter key press
    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});
