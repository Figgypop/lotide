const { maps } = require("./assertArrayEqual");

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5]

const assertArrayEqual = function (actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return;
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]) {
    return false;
    }
  }
  return true;
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArrayEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])
assertArrayEqual(map(numbers, number => numbers[2]), [3, 3, 3, 3, 3])
assertArrayEqual(map(words, word => word[0, 1] ), ['r', 'o', 'o', 'a', 'o'])


module.exports = map;