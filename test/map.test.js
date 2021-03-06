_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });
  it('uses the identity function by default, resulting in same array', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr);
    expect(arr).toEqual(mappedArr);
  });
  it('does not modify the original array', () => {
    const arr = [1,2,3];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(arr).toBe(arr);
  });
});