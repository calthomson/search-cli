#!/usr/bin/env node

var users = require('./users.json');
var tickets = require('./tickets.json');
var organizations = require('./organizations.json');

const R = require('ramda');
var now = require("performance-now")

const [,, ...args] = process.argv // search term must be in quotations

var input = args;

var data = {
	Users: users,
	Tickets: tickets,
	Organizations: organizations,
}

// Exact word matching of first argument
var containsExactKey = dataObj => R.contains(args[0], R.values(dataObj));

// Partial word matching
var containsKey = dataObj => R.indexOf(args[0], R.toString(R.values(dataObj))) !== -1;

// Time execution
var start = now();

const result = R.filter(containsKey, users);

var end = now();

console.log('Results:', result);
console.log('Number of results:', result.length);
console.log("Time to execute search:" + (end-start) + " milliseconds.")