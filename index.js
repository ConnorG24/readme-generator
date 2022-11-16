// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkDown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Enter Project Title',
    name: 'title',
  },{
    type: 'input',
    message: 'enter project description',
    name: 'description',
  },{
    type: 'input',
    message: 'Enter project Installation guide',
    name: 'Install',
  },{
    type: 'input',
    message: 'Enter project usage',
    name: 'usage',
  },{
    type: 'input',
    message: 'Enter project contributions',
    name: 'contributions',
  },{
    type: 'input',
    message: 'Enter test instructions if any',
    name: 'tests',
  },{
    type: 'input',
    message: 'Enter Github username',
    name: 'github',
  },{
    type: 'input',
    message: 'Enter email adress',
    name: 'email',
  },{
    type: 'input',
    message: 'Enter project credits',
    name: 'credits',
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
  );
}

// TODO: Create a function to initialize app
function init() {
   return inquirer.prompt(questions);
    
}

// Function call to initialize app
init()
.then(userInput => {
    return genMarkDown(userInput);
})
.then(readmeInfo => {
    return writeToFile('README.md',readmeInfo);
})
.catch(err => {
    console.log(err);
})