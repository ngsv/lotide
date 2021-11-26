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

const flatten = function(nestedArray) {
  let singleArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i]) === true) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        singleArray.push(nestedArray[i][j]);
      }
    } else {
      singleArray.push(nestedArray[i]);
    }
  }
  return singleArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
