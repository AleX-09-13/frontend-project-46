#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
// prettier-ignore
program
 .description('exemple')
 .version('0.0.1')
 .option('-h, --help')
 .parse();

program.help();
// prettier-ignore-end
