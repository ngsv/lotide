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


const without = function(source, itemsToRemove) {
  let arraySubset = [];
  for (let i = 0; i < source.length; i++) {
    let containsItem = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        containsItem = true;
      }
    }
    if (containsItem === false) {
      arraySubset.push(source[i]);
    }
  }
  return arraySubset;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

//Check that original array is not modified by the 'without' function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
