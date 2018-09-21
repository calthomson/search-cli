import R from 'ramda';

var search = (data, key) => {
	// Exact word matching of first argument
	var containsExactKey = dataObj => R.contains(args[0], R.values(dataObj));

	// Partial word matching
	var containsKey = dataObj => R.indexOf(key, R.toString(R.values(dataObj))) !== -1;

	return R.filter(containsKey, data);
}

export default search;