//  Function contains the hardcode to generate the markdown
function generateMarkdown(data) {
    return `# ${data.title}
    [![License:MIT](https://img.shields.io/badge/License-${date.license}-yellow.svg)](https://opensource.org/licenses/MIT)

# Description
${data.Description}

##Table of Contents
[Description](#description)
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
[My Github page](https://github.com/${data.username}) 

Email: ${data.email}
${data.additional}

`;
}

module.exports = generateMarkdown;