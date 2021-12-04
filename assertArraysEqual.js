const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  let arraysEqual = eqArrays(array1, array2);
  if (arraysEqual === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual([1, 2, 3], [3, 2, 1]); //false
assertArraysEqual([], []); //true
assertArraysEqual([], [1]); //false
assertArraysEqual([0], [0]); //true
assertArraysEqual([1, 2, 3, 4], [1, 2]); //false

module.exports = assertArraysEqual;
