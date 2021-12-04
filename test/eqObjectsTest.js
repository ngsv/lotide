const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cde = { c: "1", d: ["2", 3, 4] };
  it('returns true for { a: "1", b: "2" } and { b: "2", a: "1" }', () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it('returns true for { a: "1", b: "2" } and { a: "1", b: "2", c: "3" }', () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it('returns true for { c: "1", d: ["2", 3] } and { d: ["2", 3], c: "1" }', () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it('returns false for { c: "1", d: ["2", 3] } and { c: "1", d: ["2", 3, 4] }', () => {
    assert.deepEqual(eqObjects(cd, cde), false);
  });
});
