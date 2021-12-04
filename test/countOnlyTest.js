const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

describe("#countOnly", () => {
  it('returns true for 1 instance of "Jason"', () => {
    assert.equal(result["Jason"], 1);
  });
  it('returns undefined for instances of "Karima"', () => {
    assert.equal(result["Karima"], undefined);
  });
  it('returns true for 2 instances of "Fang"', () => {
    assert.equal(result["Fang"], 2);
  });
  it('returns undefined for instances of "Agouhanna"', () => {
    assert.equal(result["Agouhanna"], undefined);
  });
});
