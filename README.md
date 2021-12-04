# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Description

A JavaScript utility library with various helpful functions.

## Author

{
  "name": "Steven Ngov",
  "email": "gl.steven.ngov@gmail.com"
}

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

## Usage

**Install it:**

`npm install @svng/lotide`

**Require it:**

`const _ = require('@svng/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: compares two values and prints out a message telling us if they do or not
* `assertArraysEqual`: prints out a message telling us if two arrays are identical or not
* `assertObjectsEqual`: prints out a message telling us if two objects are identical or not
* `eqArrays`: compares whether two arrays are identical
* `eqObjects`: compares whether two objects are identical
* `countOnly`: takes in a collection of items and return counts for a specific subset of those items
* `countLetters`: takes in a sentence (as a string) and then return a count of each of the letters in that sentence
* `findKeyByValue`: searches for a key on an object where its value matches a given value
* `findKey`: finds key in an object using a callback function
* `flatten`: given an array with other arrays inside, it flattens it into a single-level array
* `map`: returns a new array based on the results of the callback function
* `head`: returns the first element in an array
* `middle`: returns the middle element in an array
* `tail`: returns everything except the first element in an array
* `takeUntil`: returns a slice of an array with elements taken from the beginning
* `without`: returns a subset of a given array, removing unwanted elements
