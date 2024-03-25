const inquirer = require("inquirer");
const fs = require("fs");
const { listenerCount } = require("process");
const generateMarkdown = require("./utils/generateMarkdown.js");

//create an array of objects, each object is a question
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What installations do you need?",
    name: "installations",
  },
  {
    type: "input",
    message: "What is the usage of your project?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license will you need?",
    name: "license",
    choices: ["MIT", "Apache_license_2.0", "Microsoft_Public_License"],
  },
  {
    type: "input",
    message: "Who has contributed to this project?",
    name: "contributors",
  },
  { type: "input", message: "What test have been done?", name: "tests" },

  {
    type: "input",
    message: "Any questions?",
    name: "questions",
  },
];

//Create a function to write README file
function writeToFile(fileName, data) {}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const markdown = generateMarkdown(response);
    fs.writeFileSync("./utils/README.md", markdown);
  });
}

// Function call to initialize app
init();
