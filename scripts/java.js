"use strict";
function displayGreeting() {
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
} 
//create instances of WeekendEvent and display them
document.addEventListener("DOMContentLoaded", function() {
    //call greeting function
    displayGreeting();
});
//Clear any previous error messages
document.getElementById("errorMessages").textContent = "";
    try { 
        const name = document.getElementById("myName").value.trim();
        const email = document.getElementById("myEmail").value.trim();
        const date = document.getElementById("mydate").value.trim();
        comments = document.getElementById("myComments").value.trim();
    }
//Simple validation checks
        if (!name || !email || !date || !comments) {
            throw new Error("All fields are required.");
        }
        if (!email.includes("@")) {
            throw new Error("Invalid email format.");
        }
//Attach validation function once the DOM is fully loaded
window.onload = function() {
    //call function
    displayGreeting();
    const form = document.getElementById("form");
    form.addEventListener("submit", validateForm);
}

