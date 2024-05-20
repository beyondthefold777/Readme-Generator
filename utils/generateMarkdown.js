// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "none") {
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[License](https://choosealicense.com/licenses/${license}/)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "none") {
      return `## License
   
  This project is licensed under the [${license}](https://choosealicense.com/licenses/${license}/) license.`;
    }
    return "";
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Languages](#languages)
  * [License](#license)
  * [Screenshot/Recording] (#Screenshot/Recording)
  * [Deployed App Link] (#Deployed App link)
  * [Contributions](#contributions)
  * [Questions](#questions)
  
  ## Description  
  ${data.description}

  ## Installation
  ${data.installation}

  ## Languages
  ${data.languages}

  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  ## Contributions

  ${data.contributors}

  ## Screenshot/Recording
  ${data.screenshot}

  ## Deployed App Link
  ${data.link}

  ## Questions
  - ${data.email}
  - Github.com/${data.repo}
`;
}

  module.exports = generateMarkdown;
