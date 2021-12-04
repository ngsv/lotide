const letterPositions = require("../letterPositions");
const assert = require("chai").assert;
const inspect = require("util").inspect;

let result = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

let string = "lighthouse in the house";

describe("#letterPositions", () => {
  it(`returns ${inspect(result)} for "lighthouse in the house"`, () => {
    assert.deepEqual(letterPositions(string), result);
  });
});
