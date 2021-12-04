const eqObjects = require("./eqObjects");

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
