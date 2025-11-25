// Selecting elements
let taskInput = document.getElementById("task-input");
let addBtn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");

// Add Task on button click
addBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create li
    let li = document.createElement("li");
    li.textContent = taskText;

    // Create Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.style.marginLeft = "10px";

    // Create Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    // Complete button functionality
    completeBtn.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
        li.style.color = "gray";
    });

    // Delete button functionality
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Append buttons to li
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});