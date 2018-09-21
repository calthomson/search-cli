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
}]

describe('Search', function() {
	it('should return correct results given some data and a key', () => {
	  let result = search(sampleData, 'Sample');

	  expect(result).to.deep.equal([sampleData[0]]);

	  result = search(sampleData, 'Test');

	  expect(result).to.deep.equal([sampleData[1]]);
	});
});