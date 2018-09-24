import indexOf from 'ramda/src/indexOf';
import toString from 'ramda/src/toString';
import values from 'ramda/src/values';
import reduce from 'ramda/src/reduce';
import merge from 'ramda/src/merge';
import is from 'ramda/src/is';
import now from 'performance-now';

const isObject = is(Object);
const isArray = is(Array);

// Get the start & end indexes of search term occurences, for each property of the result object
const getKeyIndexes = (result, key)  => {
	let keyIndexes = {};

	for (let prop in result) {
		let str = result[prop].toString();
		let keyIndexesWithinProp = [];
		let keyStart = str.indexOf(key);
		let keyEnd = keyStart + key.length;

		// Loop over the current property value, storing the start & end indices of key occurences
		while (keyStart > -1) {
			keyIndexesWithinProp.push([keyStart, keyEnd]);
			str = str.slice(keyEnd);
			keyStart = str.indexOf(key);
			keyEnd = keyStart + key.length;
		}

		// Store the prop & the array of search key indices for that property, in keyIndexes
		if (keyIndexesWithinProp.length > 0) {
			keyIndexes = merge(keyIndexes, {[prop]: keyIndexesWithinProp})
		};
	}

	return keyIndexes;
}

const containsKey = (dataObj, key) => {
	if (key === '') return indexOf('""', toString(dataObj)) > -1;
	return indexOf(key, toString(values(dataObj))) !== -1;
}

const doesRecordContainKey = key => (acc, dataObj) => {
	if (!isObject(dataObj)) throw new Error('Invalid data source format');

	if (containsKey(dataObj, key)) {
		let keyIndexes = key === '' ? {} : getKeyIndexes(dataObj, key);
		acc.push({ dataObj, keyIndexes });
	}
	return acc;
};

/* Search returns two things:
	1. An array of results, where each result contains:
		* dataObj: The object containing the search term
		* keyIndexes: An object containing lists of indices matching occurences of the search term
	2. The time taken to execute the search
*/
const search = (data, key) => {
	if (!isArray(data)) {
		throw new Error('Invalid data source format');
	};

	const start = now();

	let results = reduce(doesRecordContainKey(key), [], data);

	const end = now();

	const executionTime = end - start;

	return [results, executionTime];
}

export default search;