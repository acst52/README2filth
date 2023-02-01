// README SECTION TITLES + Qs:
  // 1. #Title of Project (user Title input = title of README)
  // 2. ## Description: Description of project
      // *Deployed link?* (bolded)
  // 3. ## Table of Contents: ...TOC links to corresponding README sections
  // 4. ## Installation: ...get installation instructions
  // 5. ## Usage: ...get usage info
  // 6. ## License: ...list options, add descript to license section, add badge to top of file
  // 7. ## Contributing: ...get contribution guidelines
  // 8. ## Tests: ...get test instructions
  // 9. ## Questions: ... a few things to add here:
        // 9A. GitHub username that links to repo
        // 9B. email address + instructions how to reach me with additional questions

        const inquirer = require('inquirer');
        const fs = require('fs');
        
        // Common type values in inquirer:
          // 1. input: a simple text input
          // 2. confirm: a yes/no question, w/ a boolean response
          // 3. list: a list of choices for the user to select from
          // 4. checkbox: a list of options for the user to check one or more of
          // 5. password: a password input, w/ the text masked for security
          // 6. editor: a full-featured text editor
          // 7. expand: a list of options for the user to select from, w/ additional details displayed
        
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
            name: 'repoName',
            message: 'What is your GitHub repo name, so we can link to your deployed app?'
            // validate in some way. If your app isn't deployed using github pages, leave this blank. 
              // then below, for loop, if left blank, do not write this data += *
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
            message: 'Pick the license you want to use from the list:'
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
          // {
          //   type: 'input',
          //   name: 'location',
          //   message: 'Where do you live?'
          // },
          { // BEFORE EMAIL, PREFIX WITH "Any further questions or have an issue to report? Send me an email: "
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
          }
        ];
    
inquirer.prompt(questions).then(answers => {
// convert the answers object to a string
const data = JSON.stringify(answers, null, 2);
            
fs.writeFileSync('answers.json', data);
    console.log('Answers written to answers.json');
});
            
// OR, to prefix each answer with a title written to the README:
inquirer.prompt(questions).then(answers => {
    let data = '';
        data += 'Answer 1: ' + answers.name + '\n\n';
        data += 'Answer 2: ' + answers.age + '\n\n';
        data += 'Answer 3: ' + answers.location + '\n\n';
        // BOLD? WRAP IN ** --> data += 'Answer 3: **' + answers.location + '**\n\n';
        // MD TITLE? USE #, ## etc --> data += '# ' + answers.location + '\n\n'; (= level 1 heading in md)
              
    fs.writeFileSync('README.txt', data);
        console.log(`Answers written to README.txt`);
    });

// So README will look like this: 

// Answer 1: [Name]

// Answer 2: [Age]

// Answer 3: [Location]


// Another way to do it, FROM CLASS NOTES:
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
  {
    type: 'password',
    message: 'What is your password?',
    name: 'password',
  },
  {
    type: 'password',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
  },
])
.then((response) =>
    response.confirm === response.password
    ? console.log('Success!')
    : console.log('You forgot your password already?!')
);