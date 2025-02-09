// DOM Elements
let getName = document.getElementById("nameId");
let getMail = document.getElementById("mailId");
let getPassword = document.getElementById("passId");

let errorName = document.getElementById("errorName");
let errorMail = document.getElementById("errorMail");
let errorPass = document.getElementById("errorPass");
let submitButton=document.getElementById("submitBtn")

// Error Messages
let ERROR_MESSAGE = "Enter all the fields";
let NAME_MESSAGE = "Enter your name";
let MAIL_MESSAGE = "Enter your email";
let PASS_MESSAGE = "Enter your password";
let NAME_WARNING = "Name cannot have special characters";
let MAIL_WARNING = "Invalid email format";
let PASS_WARNING = "Password should be between 6 and 10 characters";

// Regular Expressions
let nameRegex = /^[A-Za-z\s]+$/
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let passRegex = /^.{6,10}$/

// Main Function
function submitForm(event) {
    event.preventDefault(); 

    let nameInput = getName.value.trim()
    let mailInput = getMail.value.trim()
    let passwordInput = getPassword.value.trim()

    let isValid = true;

    errorName.textContent = ""
    errorMail.textContent = ""
    errorPass.textContent = ""

    // Name Validation
    if (!nameInput) {
        errorName.textContent = NAME_MESSAGE
        isValid = false
    } else if (!nameRegex.test(nameInput)) {
        errorName.textContent = NAME_WARNING
        isValid = false
    }

    // Email Validation
    if (!mailInput) {
        errorMail.textContent = MAIL_MESSAGE;
        isValid = false;
    } else if (!emailRegex.test(mailInput)) {
        errorMail.textContent = MAIL_WARNING;
        isValid = false;
    }

    // Password Validation
    if (!passwordInput) {
        errorPass.textContent = PASS_MESSAGE;
        isValid = false;
    } else if (!passRegex.test(passwordInput)) {
        errorPass.textContent = PASS_WARNING;
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        return false;
    }

}
