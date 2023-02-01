// ASST CODE HERE:
// Pseudocode steps:
    // 1. Get questions answered and stored in a file
    // 2. Validate user answers to ensure no errors
    // 3. Code to format file (\r\n  get ans on new lines  \n\r)
        // make text diff color: https://stackoverflow.com/questions/65023151/how-to-change-log-txt-file-color-in-node-js
        // Node.js docs: https://nodejs.org/api/ 



// NOTES RE: command-line app that asks users questions, writes answers to a file:

    const inquirer = require('inquirer');
    const fs = require('fs');
    // const args = process.argv.slice(2);  A

    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'age',
        message: 'How old are you?'
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where do you live?'
      }
    ];
    
    inquirer.prompt(questions).then(answers => {
      // convert the answers object to a string
      const data = JSON.stringify(answers, null, 2);
    
//// check the file name passed as an argument  A
//   if (!args[0]) {
//     console.error("Please provide a file name as an argument")
//     process.exit(1);
//   }
//// write the data to a file  A
//   fs.writeFileSync(args[0], data);

// console.log(`Answers written to ${args[0]}`);
// });

      // write the data to a file
      fs.writeFileSync('answers.json', data);
    
      console.log('Answers written to answers.json');
    });

// This script will prompt the user with three questions and store the answers in a JSON file name "answers.json"

// A. You can also make this dynamic by passing the file name as an argument when running the application.



// (below) You can also add a validation function to the questions to validate the user input before storing it.

const inquirer = require('inquirer');
const fs = require('fs');
const args = process.argv.slice(2);

const questions = [
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: function(input) {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(emailRegex.test(input)){
        return true;
      }
      return 'Please enter a valid email address.';
    }
  },
  {
    type: 'input',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'input',
    name: 'location',
    message: 'Where do you live?'
  }
];

inquirer.prompt(questions).then(answers => {
  // convert the answers object to a string
  const data = JSON.stringify(answers, null, 2);
  
  // check the file name passed as an argument
  if (!args[0]) {
    console.error("Please provide a file name as an argument")
    process.exit(1);
  }
  // write the data to a file
  fs.writeFileSync(args[0], data);

  console.log(`Answers written to ${args[0]}`);
});

// In this example, the validation function is using regular expression to check if the 
// input is a valid email address. If the input is a valid email address, the function 
// returns true, otherwise it returns a string with an error message. The inquirer package 
// will display this error message to the user if the input is not valid.

// You can also use libraries like 'email-validator' to validate the email address:

const validator = require('email-validator');
validator.validate(email)
// This will return a boolean indicating if the email is valid or not.