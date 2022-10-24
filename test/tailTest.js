const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Wassa', 'Suh'] for ['Yo Yo', 'Wassa', 'Suh']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Wassa', 'Suh']), ['Wassa', 'Suh']);
    
  })
});



// const assertEqual = require('../assertEqual');
// const tail = require('../tail');
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements! 