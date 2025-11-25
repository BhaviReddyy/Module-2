// Selecting elements
let colorInput = document.getElementById("color-input");
let textInput = document.getElementById("text-input");
let bgBtn = document.getElementById("bg-btn");
let textBtn = document.getElementById("text-btn");
let box = document.getElementById("content-box");

// Change Background Color
bgBtn.addEventListener("click", function() {
    let colorValue = colorInput.value.trim();

    // Temporary assignment to check if valid color
    let testDiv = document.createElement("div");
    testDiv.style.backgroundColor = colorValue;

    if (testDiv.style.backgroundColor === "") {
        alert("Invalid color name!");
    } else {
        box.style.backgroundColor = colorValue;
    }
});

// Update Text Content
textBtn.addEventListener("click", function() {
    let textValue = textInput.value.trim();

    if (textValue === "") {
        alert("Please enter some text!");
    } else {
        box.textContent = textValue;
    }
});