// require statements to import modules:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// get questions into questions array of objects:
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project Title?'
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Describe your application; be sure to include what the app is for!'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install necessary dependencies? Hit enter to accept default:',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do users use your application? List or describe usage info here:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick the license you want to use from the list:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD3', 'none']
  },
  {
    type: 'editor',
    name: 'contributing',
    message: 'What contribution guidelines do you want users to follow (ex: fork repo)?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be used to run tests? Hit enter to accept default:',
    default: 'npm test'
  },
  {
    type: 'input',
    name: 'githubUser',
    message: 'What is your GitHub username, so users can be directed to your GitHub profile?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data); // general set up - new file is joining whats in this current dir with a specified file
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Generating your README...muahahahaha");
    writeToFile("README.md", generateMarkdown({...answers})) // going to spread out all these answers inside this obj as our data
  }) 
}

// Function call to initialize app
init();
