import { readFile } from '../../src/utils/file';

describe('node js file system', () => {
  test('read file to string', () => {
    const fileContent = readFile(`${process.cwd()}/tests/data/file`);

    expect(fileContent).toBe('test1\ntest2\ntest3');
  });
});
