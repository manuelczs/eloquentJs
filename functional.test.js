const functional = require('./functional')

test('Filter [1,2,3,4,5,6] isPair must be [2,4,6]', () => {
	expect(filter([1,2,3,4,5,6], isPair)).toEqual([2,4,6])
});

/*
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
*/