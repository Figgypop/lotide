const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

//function that takes in two objects

const eqObjects = function (object1, object2) {

  //  establish that we need the keys of each object
  const object1Keys = Object.keys(object1) // [c, d]
  const object2Keys = Object.keys(object2) // [c, d]

  //console.log(object1Keys, object2Keys); ==> Test

  // compare length of keys

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  // compare values of keys

  for (let key of object1Keys) {
    const object1Value = object1[key] // ["2", 3]
    const object2Value = object2[key] // ["2", 3, 4]
    //console.log(object1key);
    console.log(object1Value);
    console.log(object2Value);

    // Check if value is an array and if they are equal
    if ((Array.isArray(object1Value) && Array.isArray(object2Value)) && !eqArrays(object1Value, object2Value)) {
      return false;
    }
    //console.log("fail when comparing values")
  }

  if (object1Value !== object2Value) {

    return false;
  }

  return true;
}



const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1"
};

assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

assertEqual(eqObjects(cd, cd2), false); // => false
//console.log(eqArrays(["2", 3], ["2", 3, 4]));


//const ab = {
//  a: "1",
//  b: "2"
//};

//const ba = {
//  b: "2",
//  a: "1"
//};

//eqObjects(ab, ba); // ==> true

//const abc = {
//  a: "1",
//  b: "2",
//  c: "3"
//};

//eqObjects(ab, abc); //==> false

//assertEqual(eqObjects(ab, abc), false);
//assertEqual(eqObjects(ab, ba), true);