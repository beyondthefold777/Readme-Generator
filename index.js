// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What motivated you to create this project?", 
"What problem does this project solve?", "What makes your project stand out?", "What features will your project include in the future?"];

// TODO: Create a function to write README file
const fs = require('fs')
fs.writeFile('ReadME.md', 'Readme Generator', (err) => {
if (err) {
    throw new error(err);
}
console.log("File was written succesfully");
})



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
