// function that returns license badge based on which license is passed in (that user chose). If no license, return empty string:
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![license badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  } return "";
}

// function that returns license link. If no license, return empty string:
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `* [License](#license)` // TOC link
  } return "";
}

// function that returns license section of README. If no license, return empty string:
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License

This project is licensed under the ${license} license.`
  } return "";
}

// function that generates md for README:
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

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

// export this module to be imported in index.js:
module.exports = generateMarkdown;
