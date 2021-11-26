const eqArrays = function(array1, array2) {
  let equalOrNot = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        equalOrNot = false;
        break;
      }
    }
  } else {
    equalOrNot = false;
  }
  return equalOrNot;
};


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
