const inquirer = require('inquirer');
const fs = require('fs');

var licenseChoices = [
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
  { // BEFORE EMAIL, PREFIX WITH "Any further questions or have an issue to report? Send me an email: "
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


// WHICH METHOD TO USE??? 

inquirer.prompt(questions).then(answers => {
// convert the answers object to a string
const data = JSON.stringify(answers, null, 2); // ??
// write answers to a file
fs.writeFileSync('answers.json', data);
    console.log('Answers written to answers.json');
});


// to prefix each answer with a title written to the README:
    // We want section titles. First title = their 1st answer (title)
    // Following sections titles are Description, Installation, Usage etc.

inquirer.prompt(questions).then(answers => {
  let data = '';
  data += 'Answer 1: ' + answers.name + '\n\n';
  data += 'Answer 2: ' + answers.age + '\n\n';
  data += 'Answer 3: ' + answers.location + '\n\n';
  // write GitHub username to file, linking to their page:
  data += '[Visit my GitHub](https://github.com/' + answers.githubUser + ')\n\n';
    // TITLE ON LINE ABOVE ANSWER? --> data += 'Answer 3: \n' + answers.location + '\n\n';
    // BOLD? WRAP IN ** --> data += 'Answer 3: **' + answers.location + '**\n\n';
    // MD TITLE? USE #, ## etc --> data += '# ' + answers.location + '\n\n'; (= level 1 heading in md)
  
  fs.writeFileSync('README.txt', data);

  console.log(`Answers written to README.txt`);
});



// IF WE HAVE TO DO EACH PROMPT SEPARATELY, HERE'S ONE FOR LICENSE SECTION:
var licenseChoices = [
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

inquirer
  .prompt([
    {
      type: "list",
      name: "license",
      message: "Which type of license do you want to use?",
      choices: licenseChoices
    }
  ])
  .then(answers => {
    fs.readFile("README.txt", "utf-8", (err, data) => {
      if (err) throw err;
      data = answers.license + '\n\n' + data;
      fs.writeFile("README.txt", data, err => {
        if (err) throw err;
        console.log("Successfully added license badge to README.txt");
      });
    });
  });