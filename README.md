### Project Description
This is a simple search CLI built with Node.js and Ramda. It is designed to search through an array of JSON objects. It returns all entities that contain at least one property whose value contains the search key.

Given an empty search key (eg. ''), it will return any entities containing properties with empty values.

Given data of an invalid format (eg. anything other than an array of objects) it will return 'Invalid input format'.

##### Example:
// TODO

### Run the Project
`npm run start '<search key>'`


### Run the Tests
`npm run test`

### Stack

- Node.js
- Babel for translation of ES6 Javascript to ES5
- Mocha & Chai for testing
- Ramda for filtering & parsing large amounts of data
- performance-now to measure execution time

### Resources

- [A guide to creating a NodeJS command-line package](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [Ramda documentation](https://ramdajs.com/)
- [Chai documentation](https://www.chaijs.com/)

### Todo
- [x] Handle empty string search + tests
- [x] Format output (basic) + tests
- [ ] Prettify output further
- [ ] Improved error handling
- [x] Test huge amount of data
	- Tested arrays of 10000 objects and 20000 objects
- [ ] Dynamic inputs (instead of always grabbing from specific JSON files)
- [ ] Finalize README.md
- [ ] Publish as a node module, for easy running
