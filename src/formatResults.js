import R from 'ramda';
import colors from 'colors';

// Highlight pieces of the string according to the indexes in the keyIndexes array
const highlightKeys = (str, keyIndexes) => {
	let result = '';

	for (let keyIndex of keyIndexes) {
		let regular = str.slice(0, keyIndex[0]);
		let highlighted = str.slice(keyIndex[0], keyIndex[1]);

		str = str.slice(keyIndex[1]);
		result = `${result}${regular}${highlighted.inverse}`;
	}

	return `${result}${str}`;;
}

// Format a single result, highlighting output according to the keyIndexes array
var formatResult = (result) => {
	let output = '';
	let { dataObj, keyIndexes } = result;

	for (let prop in dataObj) {
		let val = dataObj[prop].toString();
		output = `${output}${colors.yellow.bold(prop + ':')} ` // Print property key
		output = `${output}${keyIndexes[prop] ? highlightKeys(val, keyIndexes[prop]) : val}\n` // Print value
	}

	return output;
}

var formatResults = (results) => {
	let output = '';

	for (let result of results) {
		output += `\n${formatResult(result)}`;
		output += '--------------------------------------------------------------------------------';
	}

	return output;
}

export default formatResults;