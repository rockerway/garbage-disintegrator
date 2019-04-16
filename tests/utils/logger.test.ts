import { info, error, success } from '../../src/utils/logger';
import chalk from 'chalk';

describe('logger test', () => {
  test('info test', () => {
    let result = '';
    const expected = 'message';
    const storeLog = input => (result += input);
    console.log = jest.fn(storeLog);
    info('message');
    expect(result).toBe(expected);
  });

  test('info test with type', () => {
    let result = '';
    const expected = `${chalk.green.bold('type')} message`;
    const storeLog = input => (result += input);
    console.log = jest.fn(storeLog);
    info('message', 'type');
    expect(result).toBe(expected);
  });

  test('error test', () => {
    let result = '';
    const expected = chalk.red('error');
    const storeLog = input => (result += input);
    console.error = jest.fn(storeLog);
    error('error');
    expect(result).toBe(expected);
  });

  test('success test', () => {
    let result = '';
    const expected = chalk.green('success');
    const storeLog = input => (result += input);
    console.error = jest.fn(storeLog);
    success('success');
    expect(result).toBe(expected);
  });
});
