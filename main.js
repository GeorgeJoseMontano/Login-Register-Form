// Function to show error message
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
// Function to create error message
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
// Function to toggle password visibility
function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

// Add event listener to the login and register button
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const loginButton = document.getElementById("login-submit");
    const regButton = document.getElementById("reg-submit");
   
    // Create default variables
    var user = "default_user";
    var pass = "default_password";

    // Add event listener to the login button
    loginButton.addEventListener("click", e => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;
        // Check if fields are empty, incorrect username and password combination, login successful
        if(username==="" || password===""){
            setFormMessage(loginForm, "error", "Please fill in all fields");
        }else if (username === user && password === pass) {
            setFormMessage(loginForm, "success", "Login Successful");
        }else {
            setFormMessage(loginForm, "error", "Invalid Credentials.");
        }
    });

    // Add event listener to the register button
    regButton.addEventListener("click", e => {
        e.preventDefault();
        // Check if fields are empty
        user = loginForm.username.value;
        pass = loginForm.password.value;

        if(user==="" || pass===""){
            setFormMessage(loginForm, "error", "Please fill in all fields");
        }else{
            // If fields are not empty, show success message and catch the inputted values
            setFormMessage(loginForm, "success", "Registration Successful");
            user = loginForm.username.value;
            pass = loginForm.password.value;
        }
    }); 

});