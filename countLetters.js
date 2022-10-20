const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

//The function should take in a sentence (as a string) 
//and then return an object with the count of each of the 
//letters in that sentence. 
const countLetters = function (sentence) {
  const result = {}

  //Iterate through each value of string
  for (let letter of sentence) {
    if (letter === " ") {
      continue;
    }

    //console.log(letter);  --> test code
    if (result[letter]  == undefined) {
      result[letter] = 0
    }

    result[letter]++;

  }

  //return values as object
  return result;
}


//assertEqual()
console.log(countLetters("doesnt matter"));