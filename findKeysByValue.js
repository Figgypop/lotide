const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const findKeyByValue = function (obj, val) {
  for (let keys in obj)
    if (obj[keys] === val) {
      return keys;
    }

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);




//Implement the function findKeyByValue which takes in an
//object and a value. It should scan the object and return
//the first key which contains the given value. If no key
//with that given value is found, then it should return undefined.

module.exports = findKeyByValue; 