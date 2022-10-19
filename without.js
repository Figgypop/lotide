const assertEqual = function (actual, expected) {
  if (!eqArrays) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return;
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


//set up function that takes 2 arrays as input 1) data 2) items removed
const without = function (source, itemsToRemove) {

  //iterate through arrays
  for (let i = 0; i < source.length; i++)
    for (let j = 0; j < itemsToRemove.length; j++) {

      // compare arrays remove unwanted elements generate new array with wanted elements
      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  return source;
}


console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["wassa", "hello", "suh"], ["wassa"]));