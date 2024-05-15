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
  ${renderLicenseBadge(data.license)}
  ## Title
  ${data.title}
  ## Github Repo
  ${data.repo}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Features
  ${data.features}
  ## Coding Languages
  ${data.languages}
  ## How to Use This Application:
  
  ${data.install}
  ## Application Features
  ${data.features}
  ## Contributors
  ${data.contributors}
  ## Screenshot
  ${data.screenshot}
  ## Deployed Application Url
  ${data.link}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  `;
}
 
module.exports =  generateMarkdown;
