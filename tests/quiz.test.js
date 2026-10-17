// Tests use Node's built-in test runner, so nothing needs to be installed.
// Run them with:  npm test
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { shuffle, isCorrect, calculatePercentage, getGrade, formatTimeLeft } = require("../src/quiz.js");

test("isCorrect returns true for the right answer", () => {
  assert.equal(isCorrect({ answer: 2 }, 2), true);
});

test("isCorrect returns false for a wrong answer", () => {
  assert.equal(isCorrect({ answer: 2 }, 0), false);
});

test("calculatePercentage rounds to a whole number", () => {
  assert.equal(calculatePercentage(2, 3), 67);
});

test("calculatePercentage returns 0 when there are no questions", () => {
  assert.equal(calculatePercentage(0, 0), 0);
});

test("shuffle keeps every item and does not change the original array", () => {
  const original = [1, 2, 3, 4, 5];
  const result = shuffle(original);
  assert.deepEqual([...result].sort(), [1, 2, 3, 4, 5]);
  assert.deepEqual(original, [1, 2, 3, 4, 5]);
});

test("getGrade gives an A for exactly 90%", () => {
  assert.equal(getGrade(90), "A");
});

test("formatTimeLeft formats positive seconds", () => {
  assert.equal(formatTimeLeft(12), "⏱ 12s");
});

test("formatTimeLeft formats zero seconds", () => {
  assert.equal(formatTimeLeft(0), "⏱ 0s");
});

test("formatTimeLeft rejects negative seconds", () => {
  assert.throws(() => formatTimeLeft(-1), RangeError);
});

test("formatTimeLeft rejects empty input", () => {
  assert.throws(() => formatTimeLeft(""), RangeError);
});

test("formatTimeLeft rejects null input", () => {
  assert.throws(() => formatTimeLeft(null), RangeError);
});
