const assertArrayEqual = require('../assertArrayEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle')


console.log(middle([]));            // undefined
console.log(middle([0]));           // 
console.log(middle([0, 1]));         // []
console.log(middle([0, 1, 2]));       // 1
console.log(middle([0, 1, 2, 3]));     // [1, 2]
console.log(middle([0, 1, 2, 3, 4]));   // 2