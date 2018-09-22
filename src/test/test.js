import { expect } from 'chai';

import search from '../search';
import printResults from '../printResults';

const sampleData = [{
	stringProp: 'Sample value',
	numberProp: 123,
	arrayProp: ['Sample value'],
}, {
	stringProp: 'Test value',
	numberProp: 456,
	arrayProp: ['Test value'],
}, {
	stringProp: '',
	numberProp: 456,
	arrayProp: ['Value'],
}]

describe('Search', function() {
	it('should return correct results given some data and a key', () => {
	  let result = search(sampleData, 'Sample');

	  expect(result).to.deep.equal([sampleData[0]]);

	  result = search(sampleData, 'Test');

	  expect(result).to.deep.equal([sampleData[1]]);
	});
	it('handles invalid input format', () => {
		let result = search({ sampleProp: 'Sample value' }, 'Sample');

		expect(result).to.equal('Invalid input format');

		result = search('Sample value', 'Sample');

		expect(result).to.equal('Invalid input format');

		result = search(['Sample', 'b', 'c'], 'Sample');

		expect(result).to.equal('Invalid input format');

		result = search([{ sampleProp: 'Sample value' }, 'b', 'c'], 'Sample');

		expect(result).to.equal('Invalid input format');
	});
	it('handles searches for empty values, eg. description: \'\'', () => {
		let result = search(sampleData, '');

		expect(result).to.deep.equal([sampleData[2]]);
	});
});

describe('printResults', function() {
	it('should output correctly formatted results, given an array of results', () => {
	  let output = printResults(sampleData, 'Sample');

	  expect(output).to.equal('\n\u001b[33m\u001b[1mstringProp\u001b[22m\u001b[39m:\u001b[7mSample\u001b[27m value\n\u001b[33m\u001b[1mnumberProp\u001b[22m\u001b[39m:123\n\u001b[33m\u001b[1marrayProp\u001b[22m\u001b[39m:\u001b[7mSample\u001b[27m value\n--------------------------------------------------------------------------------\n\u001b[33m\u001b[1mstringProp\u001b[22m\u001b[39m:Test value\n\u001b[33m\u001b[1mnumberProp\u001b[22m\u001b[39m:456\n\u001b[33m\u001b[1marrayProp\u001b[22m\u001b[39m:Test value\n--------------------------------------------------------------------------------\n\u001b[33m\u001b[1mstringProp\u001b[22m\u001b[39m:\n\u001b[33m\u001b[1mnumberProp\u001b[22m\u001b[39m:456\n\u001b[33m\u001b[1marrayProp\u001b[22m\u001b[39m:Value\n--------------------------------------------------------------------------------');
	});
});