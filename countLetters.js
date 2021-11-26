const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {

  let results = {};

  for (const letter of sentence) {
    //Check if there is already a key with that letter
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

assertEqual(countLetters("hello")["h"], 1);
assertEqual(countLetters("hello")["e"], 1);
assertEqual(countLetters("hello")["l"], 2);
assertEqual(countLetters("hello")["o"], 1);
