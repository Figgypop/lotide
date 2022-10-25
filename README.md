# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @figgypop/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Takes an array and returns the value of the first index

* `middle(...)`: Takes an array and returns the value of the middle index

* `tail(...)`: Takes an array and returns everything but the value of the first index

* `findKeysByValue(...)`: Takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined

* `countOnly(...)`: Takes an array and an object. It will return an object containing counts of everything that the input object listed.

* `countLetters(...)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `letterPosition(...)`:  Takes in a sentence (as a string) will return all the indices (zero-based positions) in the string where each character is found.

* `without(...)`: Takes 2 arrays as input 1) data 2) items removed. It will then compare arrays, remove unwanted elements generate new array with wanted elements.

* `maps(...)`: The map function has not been completed yet. It will take in two arguements and return a new array based on the results of the callback function.
