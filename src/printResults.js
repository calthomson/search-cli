import R from 'ramda';
import colors from 'colors';

// Print the search results in a human readable format, highlighting the search term
var printResults = (results, searchKey) => {
	let output = '';

	for (let result of results) {
		output += '\n';
		output += printResult(result, searchKey);
		output += '--------------------------------------------------------------------------------';
	}

	return output;
}

var printResult = (result, searchKey) => {
	let output = '';

	for (let prop in result) {
		let val = result[prop].toString();
		output = `${output}${colors.yellow(colors.bold(prop))}:` // Print property key
		output = `${output}${val.includes(searchKey) ? highlightKeys(val, searchKey) : val}\n` // Print value
	}

	return output;
}

// Generate a string where all occurrences of a given key are highlighted
var highlightKeys = (str, key)  => {
	let result = '';
	let keyStart = str.indexOf(key);
	let keyEnd = keyStart + key.length;

	// Highlight all occurrences of the key and add the string, so far, to the result string
	while (keyStart > -1) {
		let first = str.slice(0, keyStart);
		let second = str.slice(keyStart, keyEnd);

		str = str.slice(keyEnd);
		result = `${result}${first}${second.inverse}`;
		keyStart = str.indexOf(key);
		keyEnd = keyStart + key.length;
	}

	result = `${result}${str}`; // Add the rest of the string

	return result;
}

export default printResults;