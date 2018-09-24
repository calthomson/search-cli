#!/usr/bin/env node // Make the cli.js file executable.
import colors from 'colors';
import inquirer from 'inquirer';

import search from './search.js';
import formatResults from './formatResults.js';
import { users, tickets, orgs } from './data.js';

// Catch the interrupt signal and proceed with exiting the process
process.on('SIGINT', function() {
  console.log('Exiting search CLI 👋');
  process.exit();
});

const printResults = (header, results) =>
  console.log(`\n${colors.magenta.bold(header + ':')}\n ${formatResults(results)}`);

const promptUserForSearchKey = () => {
  const prompt = {
    name: 'searchTerm',
    type: 'input',
    message: 'What key would you like to search for?'
   };
  return inquirer.prompt(prompt);
};

const run = async () => {
  const { searchTerm } = await promptUserForSearchKey();

  console.log(`\nSearching for term: '${searchTerm}'`);

  try {
    const [userResults, userExecTime] = search(users, searchTerm);
    const [ticketResults, ticketExecTime] = search(tickets, searchTerm);
    const [orgResults, orgExecTime] = search(orgs, searchTerm);

    const executionTime = userExecTime + ticketExecTime + orgExecTime;
    const numTotalResults = userResults.length + ticketResults.length + orgResults.length;

    if (numTotalResults === 0) console.log('NO RESULTS');
    else {
      if (userResults.length !== 0) printResults('USERS', userResults);
      if (ticketResults.length !== 0) printResults('TICKETS', ticketResults);
      if (orgResults.length !== 0) printResults('ORGANIZATIONS', orgResults);
    }
    console.log(colors.cyan('Number of results containing search key:', numTotalResults));
    console.log(colors.cyan('Time to execute search: ' + executionTime + ' milliseconds'));
  } catch(e) {
    console.log(e);
  }

	run();
};

run();