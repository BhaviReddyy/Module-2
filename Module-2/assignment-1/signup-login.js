const userDatabase = [
    { username: "Alice", password: "pass123" },
    { username: "Bob", password: "pass123" }
];
const STANDARD_PASSWORD = "pass123";

/**
 * Creates a new user account if the username is not already taken.
 *
 * @param {string} username - The username to register.
 * @returns {string} Success or failure message.
 */
function signup(username) {
    console.log(`\n--- Attempting Signup for: ${username} ---`);
    const userExists = userDatabase.some(user => user.username === username);

    if (userExists) {
        return "User Already Registered. Please login.";
    }
    const newUser = {
        username: username,
        password: STANDARD_PASSWORD
    };
    userDatabase.push(newUser);

    return "Signup Successful!";
}

/**
 * Attempts to log in a user with a given username and password.
 *
 * @param {string} username - The username attempting to log in.
 * @param {string} password - The password provided.
 * @returns {string} Login status message.
 */
function login(username, password) {
    console.log(`\n--- Attempting Login for: ${username} ---`);

    // 1. Check if user exists in the database
    const userFound = userDatabase.find(user => user.username === username);

    if (!userFound) {

        return "Signup Successful! Please Login.";
    }
    if (userFound.password === password) {
        return "Login Successful!";
    } else {

        return "Wrong Password....";
    }
}
console.log(signup("Alice"));
console.log(login("Charlie", "pass123"));
console.log(login("Alice", "wrong-password"));
console.log(login("David", "pass123"));