// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = 'log.txt';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
        default:'Project'},
    {
        type:'input',
        name: 'Description',
        message: 'What was your motivation?',
        },
    {
        type: 'input',
        name: 'installation',
        message: 'What does this do?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this?',
    },
    {
        type: 'input',
        name: 'contributes',
        message: 'Who contributed to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests did you run?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What licenses are you using?',
        choices: ['Community', 'MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'Unlicense']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, function(err){
        if (err) return console.log(err);
        console.log(data);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) =>
            writeToFile('ReadMe', JSON.stringify(response))
        )};

// Function call to initialize app
init();
