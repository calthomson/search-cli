import { expect } from 'chai';

import formatResults from '../src/formatResults';
import search from '../src/search';

const sampleResults = [{
	dataObj: {
		stringProp: 'Sample value Sample',
    numberProp: 123,
    arrayProp: ['Sample value']
  },
  keyIndexes: {
  	stringProp: [[0, 6], [7, 13]],
  	arrayProp: [[0, 6]]
  }
}];

describe('formatResults', () => {
	it('should output correctly formatted results, given an array of results', () => {
	  let output = formatResults(sampleResults);

	  expect(output).to.equal('\n\u001b[33m\u001b[1mstringProp:\u001b[22m\u001b[39m \u001b[7mSample\u001b[27m value \u001b[7mSample\u001b[27m\n\u001b[33m\u001b[1mnumberProp:\u001b[22m\u001b[39m 123\n\u001b[33m\u001b[1marrayProp:\u001b[22m\u001b[39m \u001b[7mSample\u001b[27m value\n--------------------------------------------------------------------------------');
	});
});