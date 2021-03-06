const _ = require('../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    expect(_.first(['a', 'b', 'c'])).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a', 'b', 'c'], 5)).toEqual(['a', 'b', 'c']);
  });
  it('returns the whole array if you ask for exactly the number of elements it has', () => {
    expect(_.first(['a', 'b', 'c'], 3)).toEqual(['a', 'b', 'c']);
  });
  it('does not modify the original array', () => {
    const letters = ['a', 'b', 'c'];
    const firstEl = _.first(letters);
    expect(letters).toEqual(['a', 'b', 'c']);
  });
});