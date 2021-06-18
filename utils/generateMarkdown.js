// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
      break;
    case 'GNU LGPLv3':
      return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'No license':
      return ''      
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
    case 'MIT License':
      return '[License: MIT](https://opensource.org/licenses/MIT)'
      break;
    case 'GNU GPLv3':
      return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'GNU AGPLv3':
      return '[License: AGPL v3](https://www.gnu.org/licenses/agpl-3.0)'
      break;
    case 'GNU LGPLv3':
      return '[License: LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)'
      break;
    case 'Mozilla Public License 2.0':
      return '[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)'
      break;
    case 'Apache License 2.0':
      return '[License](https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'Boost Software License 1.0':
      return '[License](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'No license':
      return ''   
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
 
  ## Description:
  ${data.Description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#contributes)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#email)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contributes:
  ${data.contributes}

  ## License:
  ${renderLicenseLink(data.license)}

  ## Tests:
  ${data.tests}

  ## Questions:
  ${data.email}
  github.com/${data.github}
`;
}

module.exports = generateMarkdown;
