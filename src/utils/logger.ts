import chalk from 'chalk';

export function info(message: string, type: string | void): void {
  const header = type ? `${chalk.green.bold(type)} ` : '';
  console.log(`${header}${message}`);
}

export function error(message: string): void {
  console.error(chalk.red(message));
}

export function success(message: string): void {
  console.error(chalk.green(message));
}
