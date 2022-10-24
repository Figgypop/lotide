const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });

  it("returns [1, 2] for [0, 1, 2, 3]", () => {
    assert.deepEqual(middle([0, 1, 2, 3]), [1, 2]);
  });
});



// const assertArrayEqual = require('../assertArrayEqual');
// const eqArrays = require('../eqArrays');
// const middle = require('../middle')
// console.log(middle([]));            // undefined
// console.log(middle([0]));           // 
// console.log(middle([0, 1]));         // []
// console.log(middle([0, 1, 2]));       // 1
// console.log(middle([0, 1, 2, 3]));     // [1, 2]
// console.log(middle([0, 1, 2, 3, 4]));   // 2 