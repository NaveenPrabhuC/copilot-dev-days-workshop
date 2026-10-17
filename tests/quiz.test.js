// Tests use Node's built-in test runner, so nothing needs to be installed.
// Run them with:  npm test
const { test } = require("node:test");
const assert = require("node:assert/strict");
const {
  shuffle,
  isCorrect,
  calculatePercentage,
  getGrade,
  getFeedbackMessage,
  formatTimeLeft,
} = require("../src/quiz.js");

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

test("getGrade gives an A just above 90%", () => {
  assert.equal(getGrade(91), "A");
});

test("getGrade gives a B just below 90%", () => {
  assert.equal(getGrade(89), "B");
});

test("getGrade gives a B for exactly 75%", () => {
  assert.equal(getGrade(75), "B");
});

test("getGrade gives a C just below 75%", () => {
  assert.equal(getGrade(74), "C");
});

test("getGrade gives a C for exactly 50%", () => {
  assert.equal(getGrade(50), "C");
});

test("getGrade keeps practicing just below 50%", () => {
  assert.equal(getGrade(49), "Keep practicing");
});

test("getFeedbackMessage encourages an A grade", () => {
  assert.equal(getFeedbackMessage("A"), "Excellent work!");
});

test("getFeedbackMessage encourages a B grade", () => {
  assert.equal(getFeedbackMessage("B"), "Great job!");
});

test("getFeedbackMessage encourages a C grade", () => {
  assert.equal(getFeedbackMessage("C"), "Nice effort!");
});

test("getFeedbackMessage encourages any other grade", () => {
  assert.equal(getFeedbackMessage("D"), "Keep practicing - you've got this!");
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
