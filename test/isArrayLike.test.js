const _ = require('../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 10
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'foo': 'bar'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
  });
  it('returns false if the length key does correspond to a numerical value', () => {
    const sneakyArrayLikeObj = {
      length: '10'
    };
    expect(_.isArrayLike(sneakyArrayLikeObj)).toBe(false);
  });
  it('returns false if the length is negative', () => {
    const sneakyArrayLikeObj = {
      length: -3
    };
    expect(_.isArrayLike(sneakyArrayLikeObj)).toBe(false);
  });
});
