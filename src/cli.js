#!/usr/bin/env node // Make the cli.js file executable.
import now from 'performance-now';
import colors from 'colors';

import users from '../users.json';
import tickets from '../tickets.json';
import orgs from '../organizations.json';
import search from './search.js';
import printResults from './printResults.js';

const [,, ...args] = process.argv

const data = users.concat(tickets.concat(orgs));
const searchTerm = args[0]

let start = now();
let results = search(data, searchTerm);
let end = now();

console.log('\nRESULTS:');
console.log(printResults(results, searchTerm));
console.log(colors.cyan('Number of results containing search key:', results.length));
console.log(colors.cyan("Time to execute search: " + (end-start) + " milliseconds"));