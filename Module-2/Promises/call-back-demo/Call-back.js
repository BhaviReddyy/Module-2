function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
    setTimeout(() => {
        const username = "Bhavya";
        callback(username);
    }, 1000);
}

// Function call
getUserInput(displayMessage);