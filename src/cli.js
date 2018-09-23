#!/usr/bin/env node // Make the cli.js file executable.
import now from 'performance-now';
import colors from 'colors';
import inquirer from 'inquirer';

import users from '../data/users.json';
import tickets from '../data/tickets.json';
import orgs from '../data/organizations.json';
import search from './search.js';
import printResults from './printResults.js';

const data = users.concat(tickets.concat(orgs));

// Catch the interrupt signal and proceed with exiting the process
process.on('SIGINT', function() {
  console.log("Exiting search CLI 👋");
  process.exit();
});

const requestSearchKey = () => {
  const prompt = {
    name: "searchTerm",
    type: "input",
    message: "What key would you like to search for?"
   };
  return inquirer.prompt(prompt);
};

const run = async () => {
  const { searchTerm } = await requestSearchKey();

  console.log(`\nSearching for term: '${searchTerm}'\n`);

	let start = now();
	let results = search(data, searchTerm);
	let end = now();

	if (results.length === 0) console.log('NO RESULTS');
	else console.log(`RESULTS:\n ${printResults(results, searchTerm)}`);
	console.log(colors.cyan('Number of results containing search key:', results.length));
	console.log(colors.cyan("Time to execute search: " + (end-start) + " milliseconds"));

	run();
};

run();