let usernameInput = prompt("Enter username:");
let passwordInput = prompt("Enter password:");
function login(username, password) {
    // Convert username to lowercase for case-insensitive comparison
    const correctUsername = "admin";
    const correctPassword = "aidai123";

    // Convert both usernames to lowercase for case-insensitivity
    if (username.toLowerCase() === correctUsername) {
        if (password === correctPassword) {
            return "Login successful!";
        } else {
            return "Incorrect password. Try again.";
        }
    } else {
        return "User not found.";
    }
}

// Displaying the result in console
alert(login(usernameInput, passwordInput));
