const assertArrayEqual = function (actual, expected) {
  if (!eqArrays(actual, expected)) {
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


const letterPositions = function (sentence) {
  const result = {};
  for (let i in sentence) {
    letter = sentence[i]
    if (letter === " ") {
      continue;
    }


    if (result[letter] == undefined) {
      result[letter] = []
    }


    result[letter].push(Number(i));


  }


  return result;
}
const something = letterPositions("hello")

console.log(something);

assertArrayEqual(letterPositions("hello")["h"], [0]);