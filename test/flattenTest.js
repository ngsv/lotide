const flatten = require("../flatten");
const assert = require("chai").assert;

const array = [1, 2, [3, 4], 5, [6]];

describe("#flatten", () => {
  it('returns true for [1, 2, [3, 4], 5, [6]] and [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(flatten(array), [1, 2, 3, 4, 5, 6]);
  });
});
