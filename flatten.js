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

module.exports = flatten;
