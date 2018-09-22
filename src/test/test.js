import { expect } from 'chai';

import search from '../search';

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
	it('performs well given an array of 10,000+ objects', () => {
		// TODO
	});
});