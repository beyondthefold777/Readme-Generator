const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path')
 
// Array of questions for user input
const questions = [
    {  
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {  
        type: 'input',
        name: 'repo',
        message: 'What is your Github Repo?',
    },
    {  
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
    {  
      type: 'input',
      name: 'description',
      message: 'What is the purpose and functionality of this project?',
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please provide the relative path to the image you want to use as the screenshot."
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
    },
    {
        type: "input",
        name: "contributors",
        message: "Provide Github Usernames for your project's contributors?"
    },
    
    {  
        type: 'input',
        name: 'installation',
        message: 'How do you install the application?',             
    },
    {  
        type: 'checkbox',
        name: 'license',
        message: 'please select a license for this project?',
        choices: ["MIT", "Apache2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "languages",
        message:
        "What are the coding languages associated with this project.",
    },
];
	// Function to write README file
    function writeToFile(fileName, data) {
        fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('File created successfully!');
            }
        });
    }
     
    // TODO: Create a function to initialize app
    function start() {
        inquirer.prompt(questions)
            .then((data) => {
                writeToFile('README.md', JSON.stringify(data, null, 4));
            });
    }
     
    // Function call to initialize app
    start();