const assertObjectsEqual = function (actual, expected) {
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return;
};


//function that takes in two objects
const eqObjects = function (object1, object2) {

  //  establish that we need the keys of each object
  const object1Keys = Object.keys(object1) // [c, d]
  const object2Keys = Object.keys(object2) // [c, d]

  // compare length of keys
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // compare values of keys
  for (let key of object1Keys) {
    if (object1[key] !== object2[key]) {
      return false
    }

  }
  return true;
}

// assertObjectsEqual();

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(eqObjects(ab, abc), false); // => false

