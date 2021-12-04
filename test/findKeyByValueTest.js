const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;
const inspect = require("util").inspect;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it(`returns true for "drama" and ${inspect(bestTVShowsByGenre)}, "The Wire"`, () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});
