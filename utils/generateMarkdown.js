//Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`;
}

function renderLicenseLink(license) {
  const licenses = {
    MIT: "https://opensource.org/license/mit",
    "Apache_license_2.0": "https://opensource.org/license/apache-2-0",
    Microsoft_Public_License: "https://opensource.org/license/ms-pl-html",
  };
  if (
    license === "MIT" ||
    license === "Apache_license_2.0" ||
    license === "Microsoft_Public_License"
  ) {
    return licenses[license];
  } else {
    return "";
  }
}

// function renderLicenseSection(license) {

// }

function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
## Description
 ${data.description}

## Table of Contents
 * [installation](#installation)
 * [usage](#usage)
 * [license](#license)
 * [contributors](#contributors)
 * [tests](#tests)
 * [questions](#questions)

## Installation
${data.installations}

## Usage
${data.usage}

## License
${renderLicenseLink(data.license)}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
