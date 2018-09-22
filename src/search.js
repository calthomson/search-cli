import R from 'ramda';

var search = (data, key) => {
	// If data is not in the form of an array, return with error
	if (!Array.isArray(data)) {
		return 'Invalid input format';
	};

	// Partial word matching
	var containsKey = dataObj => {
		if (typeof dataObj !== 'object') throw "Not an object!";
		return R.indexOf(key, R.toString(R.values(dataObj))) !== -1
	};

	let result;

	try {
  		result = R.filter(containsKey, data);
	} catch(e) {
  		return 'Invalid input format';
	}

	return result;
}

export default search;