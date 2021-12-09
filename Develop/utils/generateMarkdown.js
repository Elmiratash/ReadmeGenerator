// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![Badge](https://img.shields.io/badge/License-${license}--blueviolet)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
# Description
${data.Description}

##Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#liscense)
[Contribution](#contribution)
[Tests](#tests)
[Questions](#questions)
## Installation
${data.installation}

## Usage
${data.usage}

## License
The application is covered under the ${data.license} license.
${badge(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
**Github Username:** ${data.username}
**Github Profile:** www.github.com/${data.username}/
  
**Email Address:** ${data.email}
`;
}

module.exports = generateMarkdown;