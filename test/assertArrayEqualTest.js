const eqArrays = require('../eqArrays');
const assertArrayEqual = require('../assertArrayEqual');

assertArrayEqual([1, 2, 3, 4, 5], [1, 2, 3], false); // => false
assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArrayEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArrayEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => true
