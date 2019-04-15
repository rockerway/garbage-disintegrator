import chalk from 'chalk';

export function info(message, type): void {
  const header = type ? `${chalk.green.bold(type)} ` : '';
  console.log(`${header}${message}`);
}

export function error(message): void {
  console.error(chalk.red(message));
}

export function success(message): void {
  console.error(chalk.green(message));
}
