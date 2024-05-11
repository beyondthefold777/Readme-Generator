// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What motivated you to create this project?", 
"What problem does this project solve?", "What makes your project stand out?", "What features will your project include in the future?"];

// TODO: Create a function to write README file
const fs = require('fs')
fs.writeFile('./package-lock.json', 'utf-8', (err, data) => {
if (err) {
    console.log(err);
} else {
    console.log(data);
}
});



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
