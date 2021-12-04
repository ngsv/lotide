const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;
