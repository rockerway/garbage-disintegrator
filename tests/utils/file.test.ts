import { readFile, writeFile } from '../../src/utils/file';

describe('node js file system', () => {
  test('read file to string', () => {
    const fileContent = readFile(`${process.cwd()}/tests/data/file`);
    const expected = 'test1\ntest2\ntest3';

    expect(fileContent).toBe(expected);
  });

  test('read non-exist file', () => {
    const filePath = `${process.cwd()}/tests/data/nonExistFile`;
    const expected = `file: '${filePath}' does not exist.`;

    expect(() => {
      readFile(filePath);
    }).toThrowError(expected);
  });

  test('write already exist file', () => {
    const filePath = `${process.cwd()}/tests/data/existFile`;
    const expected = `file: '${filePath}' already exist.`;

    expect(() => {
      writeFile(filePath, 'test');
    }).toThrowError(expected);
  });
});
