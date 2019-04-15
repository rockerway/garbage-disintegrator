import { getTargets, getNonRepeatedTargets } from '../src/scan';

describe('scan test', () => {
  test('get all matched targets', () => {
    const text = 'test1\ntest2\ntest3\ntest1';
    const regexp = 'test\\d';
    const result = getTargets(text, regexp);
    const expected = ['test1', 'test2', 'test3', 'test1'];

    expect(result).toEqual(expected);
  });

  test('get all matched targets without repeated', () => {
    const text = 'test1\ntest2\ntest3\ntest1';
    const regexp = 'test\\d';
    const result = getNonRepeatedTargets(text, regexp);
    const expected = ['test1', 'test2', 'test3'];

    expect(result).toEqual(expected);
  });
});
