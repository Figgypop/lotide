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

const middle = function (arr) {
  if (arr.length <= 2)
    return [];

  const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return [arr[mid - 1], arr[mid],];
  }
}

console.log(middle([]));            // undefined
console.log(middle([0]));           // 
console.log(middle([0, 1]));         // []
console.log(middle([0, 1, 2]));       // 1
console.log(middle([0, 1, 2, 3]));     // [1, 2]
console.log(middle([0, 1, 2, 3, 4]));   // 2