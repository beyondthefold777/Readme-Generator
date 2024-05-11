// TODO: Include packages needed for this application
// TODO: Create a function to write README file
const fs = require('fs');
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {  
      type: 'input',
      name: 'title',
      message: 'What is your user name?',
    }
    {  
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
         },
         {  
            type: 'input',
            name: 'email',
            message: 'Please enter your email?',
             }
          
    {  
      type: 'input',
      name: 'description',
      message: 'What is the purpose and functionality of this project?',
         },
         {  
        type: 'input',
        name: 'install',
        message: 'How do you install the project?',             
       }
             {  
                type: 'checkbox',
                name: 'license',
                message: 'please select a license for this project?',
                Choices: ["MIT", "Apache2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
                 }
             ];


 
const loadDatabase = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./package-lock.json', 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
 

fs.writeFile('ReadME.md', 'Welcome to our Readme Generator!', (err) => {
if (err) {
    throw new error(err);
}
console.log("File was written succesfully");
})
// TODO: Create a function to initialize app
const start = async () => {
   try { 
    const ReadmeGenerator = await loadDatabase('./package-lock.json'); 
   } catch (error) {

   }
}

// Function call to initialize app
start();
