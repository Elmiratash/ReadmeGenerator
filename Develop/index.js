const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");



const questions = [{
        type: "input",
        message: "What is the title of your project?",
        name: "title"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter the title of your project.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter the description of your project.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter the installation instructions.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter the usage information.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter the contribution guidelines.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "test"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter the test instructions.');
                return false;
            }
        }
    },
    {
        type: "list",
        message: "Please select a type of license.",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "BSD",
            "MPL"
        ]
    },
    {
        type: 'input',
        message: 'Enter the instructions for additional questions: ',
        name: 'additional',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter the instructions for additional questions.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter your email address.');
                return false;
            }
        }
    }
];


function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            const finishedReadMe = generateMarkdown(responses);
            console.log("Making ReadMe");
            console.log(finishedReadMe);
            fs.writeFileSync("README.md", finishedReadMe);
        })
        .catch((err) => {
            console.log(err);
        })

}

init();