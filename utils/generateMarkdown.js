// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if MIT return link
  // if apache ...
  // else return an empty string
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
${data.license}

## Contributors
${data.contributors}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
