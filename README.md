# GR-ReadMe-generator-project

  ## Description
This app dynamically generates a professional Readme.md file from a user's input using the Inquirer npm package.
This ReadMe page is an example of how the Readme will look after running the readm generator app. 

## Table of Contents
- [GR-ReadMe-generator-project](#gr-readme-generator-project)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact Info](#contact-info)

## Installation
The ReadMe was generated using code from the inquirer node js package including some custom code to help add the contents and autogenerate a professional looking ReadMe file. You can review the code within the index.js as well as the code from utils/generateMarkdown.js to reference how the ReadMe gets generated. First you should clone this repo (git repo https://github.com/grosario1/gil-professional-readme-generator.git). Once you clode the repo, change directories to go into the Develop folder, from here you can modify the index.js to add or update the input prompts which are rendered by the use of the inquirer node js package. You will need to ensure you install the node.js and npm utility in order for you utilize this readme generator. You can follow the instructions to install the utility from here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Once, it is install, use the cmd to navigate to the repo you just cloned and run.... `node init -y` to initized the node js project, then install the inquirer 8.2.4 node js package by running `npm i inquirer@8.2.4.` After, making your changes to the index.js file, you can then run `node index.js` from the command line and then you will now be prompted to input the contents of the ReadMe.
## Usage
As shown below, from the repo folder you cloned within the command line, from the command line change directories to go into the Develop folder (cd Develop/) then run 'node index.js'. You will now be prompted to input the readme information based on the prompts. Once you complete the prompts, a new ReadMe file will be generated that will include the information you entered within the prompts. See demo below:

![Alt text]("./../Screen%20Recording%202023-08-06%20at%203.57.49%20PM.mov)


## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [MIT](https://opensource.org/licenses/MIT)


## Contributing
The project is open for contributions. If you would like to contribute, create a new branch from the main and add any updates as deemed necessary. If you should find any issues with the code, please open a 'New Issue' from https://github.com/grosario1/gil-professional-readme-generator/issues and these request can be review and updated accordingly.

## Tests
You can test this app by:
1. Installing node js and npm ....https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
2. Installing the inquirer 8.2.4 package as instructed within the Installation section above. 
3. From the Develop folder within command line, run `node index.js`
4. Follow the prompts, entering the information
5. The use an editor of your choice to open the newly generated ReadMe file or run `cat ReadMe` to view the file.

## Contact Info
For more questions, feel free to contact me:
GitHub: https://github.com/grosario1
Email: grosario@alum.quinnipiac.edu
