// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![license badge](https://img.shields.io/badge/license-${license}-brightgreen)` // creates badge from license passed to this fcn
  } return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `* [License](#license)` // TOC link
  } return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License

This project is licensed under the ${license} license.` // could link to opensource.com/license for generic license... 
  } return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

TOC HERE

## Installation

To install necessary dependencies, run the following command: 
\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To perform tests, run the following command: 
\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about this project, you can contact me at ${data.email}.

You can find more of my work at [${data.githubUser}](https://github.com/${data.githubUser}/).

`;
}

module.exports = generateMarkdown;
