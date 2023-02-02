
const inquirer = require('inquirer');
const fs = require('fs');

var licenseChoices = [ // add description here??
  {
    name: "MIT License",
    value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  {
    name: "Apache License 2.0",
    value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  {
    name: "GPL License",
    value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
];


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
    type: 'editor',
    name: 'installation',
    message: 'What are the installation instructions? List them here:'
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'How do users use your application? List or describe usage info here:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick the license you want to use from the list:',
    choices: licenseChoices
  },
  {
    type: 'editor',
    name: 'contributing',
    message: 'What contribution guidelines do you want users to follow (ex: fork repo)?'
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'What test instructions do you want to relay to users?'
  },
  {
    type: 'input',
    name: 'githubUser',
    message: 'What is your GitHub username, so users can be directed to your GitHub profile?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
      validate: (input) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegex.test(input)) {
          return true;
        }
        return 'Please enter a valid email address.';
      }
  }
];


inquirer.prompt(questions).then(answers => {
  let data = '';
  data += answers.title + '\n\n';
  data += '#Description \n' + answers.description + '\n\n'; // add license badge here?????
  data += '#Installation \n' + answers.installation + '\n\n';
  data += '#Usage \n' + answers.usage + '\n\n';
  // data += '#License \n' + answers.*** + '\n\n'; // need to get descripts of licenses and add to this section***
  data += '#Contributing \n' + answers.contributing + '\n\n';
  data += '#Tests \n' + answers.tests + '\n\n';
        // write GitHub username to file, linking to their page:
  data += '#Contact Me \n' + '[Visit my GitHub](https://github.com/' + answers.githubUser + ')\n\n' 
        // email:
        + 'Any further questions or have an issue to report? Send me an email: ' + answers.email + '\n\n';

  fs.writeFileSync('README.txt', data);

  console.log(`Answers written to README.txt`);
});