#!/usr/bin/env node
import now from 'performance-now';

import users from '../users.json';
import tickets from '../tickets.json';
import orgs from '../organizations.json';
import search from './search.js';

const [,, ...args] = process.argv

let data = users.concat(tickets.concat(orgs));

let start = now();
let result = search(data, args[0]);
let end = now();

console.log('Results:', result);
console.log('Number of results:', result.length);
console.log("Time to execute search:" + (end-start) + " milliseconds")