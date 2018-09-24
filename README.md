## Project description
This is a simple search CLI built with Node.js and Ramda. It is designed to search through an array of JSON objects for occurrences of a given search term. The search is case sensitive. The search will output all entities containing occurrences of the search term.

Given an empty search key (eg. ''), the search will return any entities containing properties with empty values.

##### Example:
![Example GIF](https://github.com/calthomson/search-cli/blob/master/example.gif?raw=true)

## Run the project
*First, you must [install npm](https://www.npmjs.com/get-npm) on your machine*

`npm i`

`npm start`

**To exit the CLI:** `CTRL` + `C`

## Run the tests
`npm run test`

## Stack

- **Node.js**
- **Babel** for translation of ES6 Javascript to ES5
- **Mocha** & **Chai** for testing
- **nyc** for generating test coverage reports
- **Ramda** for filtering & parsing large amounts of data
- **performance-now** to measure execution time
- **colors** to add color and improve readability of output
- **inquirer** to make the CLI interactive

## Resources

- [A guide to creating a NodeJS command-line package](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [Ramda documentation](https://ramdajs.com/)
- [Chai documentation](https://www.chaijs.com/)
- [Building a Node JS interactive CLI](https://codeburst.io/building-a-node-js-interactive-cli-3cb80ed76c86)
