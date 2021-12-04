const head = require("./head");
const middle = require("./middle");
const tail = require("./tail");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const takeUntil = require("./takeUntil");
const without = require("./without");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const flatten = require("./flatten");
const map = require("./map");

module.exports = {
  head: head,
  middle: middle,
  tail: tail,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without,
  countLetters: countLetters,
  countOnly: countOnly,
  flatten: flatten,
  map: map
};
