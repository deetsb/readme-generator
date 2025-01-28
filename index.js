// TODO: Include packages needed for this application
import iquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/genrateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can the user use this application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your application.',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can users contribute to this application?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users test this application?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown(answers));
    });
};

// Function call to initialize app
init();
