const findKeyByValue = function(object, value) {
  let firstKey = undefined;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
  return firstKey;
};

module.exports = findKeyByValue;
