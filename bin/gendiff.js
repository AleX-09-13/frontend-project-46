#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
// prettier-ignore
program
 .description('Compares two configuration files and shows a difference.')
 .version('0.0.1')
 .option('-h, --help','output usage information')
 .option('-f, --format <type>', 'output format')
 .parse();
if (program.format) {
  console.log(`Selected format: ${program.format}`);
} else {
  program.help();
}
// prettier-ignore-end
