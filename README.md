### Project description
This is a simple search CLI built with Node.js and Ramda. It is designed to search through an array of JSON objects. It returns all entities, and their properties, that contain at least one property whose value contains the search key.

Given an empty search key (eg. ''), it will return any entities containing properties with empty values.

Given data of an invalid format (eg. anything other than an array of objects) it will return 'Invalid input format'.

### Run the project
*First, you must [install npm](https://www.npmjs.com/get-npm) on your machine*

`npm i`

`npm run start`

**To exit the CLI:** `CTRL` + `C`

### Run the tests
`npm run test`

### Stack

- **Node.js**
- **Babel** for translation of ES6 Javascript to ES5
- **Mocha** & **Chai** for testing
- **Ramda** for filtering & parsing large amounts of data
- **performance-now** to measure execution time
- **colors** to add color and improve readability of output
- **inquirer** to make the CLI interactive

### Resources

- [A guide to creating a NodeJS command-line package](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [Ramda documentation](https://ramdajs.com/)
- [Chai documentation](https://www.chaijs.com/)
- [Building a Node JS interactive CLI
](https://codeburst.io/building-a-node-js-interactive-cli-3cb80ed76c86)

### To-dos
- [x] Handle empty string search + tests
- [x] Format output (basic) + tests
- [x] Make CLI interactive
- [x] Test performance with huge amount of data
	- Tested arrays of 10000 objects and 20000 objects
- [ ] Prettify output further
- [ ] Improved error handling
- [ ] Finalize README.md

### Nice-to-haves
- [ ] Dynamic data inputs (instead of always grabbing from specific JSON files)
