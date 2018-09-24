import { expect } from 'chai';

import search from '../src/search';

const sampleData = [{
	stringProp: 'Sample value',
	numberProp: 123,
	arrayProp: ['Sample value']
}, {
	stringProp: 'Test value',
	numberProp: 456,
	arrayProp: ['Test value']
}, {
	stringProp: '',
	numberProp: 456,
	arrayProp: ['Value']
}]

describe('search', () => {
	it('should return correct results given some data and a key', () => {
	  const [results, executionTime] = search(sampleData, 'Sample');

	  expect(results).to.deep.equal([{
  		dataObj: sampleData[0],
  		keyIndexes: {
  			arrayProp: [[0,6]],
  			stringProp: [[0,6]]
  		}
  	}]);

  	expect(executionTime).to.be.a('number');
	});
	it('handles invalid data format', () => {
		expect(() => search({ sampleProp: 'Sample value' }, 'Sample')).to.throw();

		expect(() => search('Sample value', 'Sample')).to.throw();

		expect(() => search(['Sample'], 'Sample')).to.throw();
	});
	it('handles searches for empty values, eg. description: \'\'', () => {
		let [results, executionTime] = search(sampleData, '');

		expect(results).to.deep.equal([{
  		dataObj: sampleData[2],
  		keyIndexes: {}
  	}]);

		expect(executionTime).to.be.a('number');
	});
});