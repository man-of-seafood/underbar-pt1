const _ = require('../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(5)).toBe(5);
  });

  it('returns the same array if given an array', () => {
    const val = [1, 2, 3];
    expect(_.identity(val)).toBe(val);
  });

  it('returns the same object if given an object', () => {
    const val = {
      'foo': 'bar'
    };
    expect(_.identity(val)).toBe(val);
  });
  it('returns the same string if given a string', () => {
    const val = 'hello';
    expect(_.identity(val)).toBe('hello');
  });
  it('returns undefined if passed an undefined value', () => {
    const val = undefined;
    expect(_.identity(val)).toBe(undefined);
  });
});