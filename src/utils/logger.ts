import chalk from 'chalk';

export function info(message, type) {
  const header = type ? `${chalk.green.bold(type)} ` : '';
  console.log(`${header}${message}`);
}

export function error(message) {
  console.error(chalk.red(message));
}

export function success(message) {
  console.error(chalk.green(message));
}
