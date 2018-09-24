import { expect } from 'chai';

import { users, tickets, orgs } from '../src/data.js';

describe('data', () => {
	describe('user data', () => {
		it('should be an array of objects', () => {
	    expect(users).to.be.an('array');

	    for (let record of users) {
	      expect(record).to.be.an('object');
	    }
		});
	});

	describe('ticket data', () => {
		it('should be an array of objects', () => {
	    expect(tickets).to.be.an('array');

	    for (let record of tickets) {
	      expect(record).to.be.an('object');
	    }
		});
	});

	describe('organization data', () => {
		it('should be an array of objects', () => {
	    expect(orgs).to.be.an('array');

	    for (let record of orgs) {
	      expect(record).to.be.an('object');
	    }
		});
	});
})