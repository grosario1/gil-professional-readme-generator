// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache 2.0') {
    return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL 3.0') {
    return '[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'Mozilla Public License 2.0') {
    return '[![License: Moziall Public License 2.0](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0%20-blue.svg)](https://opensource.org/license/mpl-2-0)';
  }
  if (license === 'Eclipse Public License 2.0') {
    return '[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0%20-blue.svg)](https://opensource.org/license/epl-2-0)';
  }
  if (license === 'Boost Software License 1.0') {
    return '[![License: Boost Software License 1.0](https://img.shields.io/badge/License-boost%20software%20License%201.0%20-blue.svg)](https://opensource.org/license/bsl-1-0)';
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL 3.0') {
    return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'Mozilla Public License 2.0') {
    return '[Mozilla Public License 2.0](https://opensource.org/license/mpl-2-0)';
  }
  if (license === 'Eclipse Public License 2.0') {
    return '[Eclipse Public License 2.0](https://opensource.org/license/epl-2-0)';
  }
  if (license === 'Boost Software License 1.0') {
    return '[Boost Software License 1.0](https://opensource.org/license/bsl-1-0)';
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)} 
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact Info
For more questions, feel free to contact me:
GitHub: [${data.github}](https://github.com/${data.github})
Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
