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


const eqObjects = function(object1, object2) {

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        //Check if the value is an array1
        if (Array.isArray(object1[key])) {
          if (eqArrays(object1[key], object2[key]) === false) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;
  let objectsEqual = eqObjects(object1, object2);
  if (objectsEqual === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); //true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); //false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); //true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); //false
