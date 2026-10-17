// Tests use Node's built-in test runner, so nothing needs to be installed.
// Run them with:  npm test
const { test } = require("node:test");
const assert = require("node:assert/strict");
const {
  shuffle,
  isCorrect,
  createQuiz,
  answerQuestion,
  nextQuestion,
  isQuizFinished,
  calculatePercentage,
  isNewBestScore,
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

test("createQuiz creates an initial state without changing the questions", () => {
  const questions = [{ answer: 1 }];
  const state = createQuiz(questions);
  assert.deepEqual(state, { questions, current: 0, score: 0 });
  assert.notEqual(state.questions, questions);
  assert.deepEqual(questions, [{ answer: 1 }]);
});

test("createQuiz creates an empty initial state for no questions", () => {
  assert.deepEqual(createQuiz([]), { questions: [], current: 0, score: 0 });
});

test("createQuiz rejects null questions", () => {
  assert.throws(() => createQuiz(null), TypeError);
});

test("answerQuestion increments the score for a correct answer without mutating state", () => {
  const state = { questions: [{ answer: 1 }], current: 0, score: 0 };
  const result = answerQuestion(state, 1);
  assert.deepEqual(result, {
    state: { questions: state.questions, current: 0, score: 1 },
    correct: true,
  });
  assert.deepEqual(state, { questions: [{ answer: 1 }], current: 0, score: 0 });
});

test("answerQuestion keeps the score for an incorrect answer", () => {
  const state = { questions: [{ answer: 1 }], current: 0, score: 2 };
  const result = answerQuestion(state, 0);
  assert.equal(result.correct, false);
  assert.equal(result.state.score, 2);
  assert.equal(state.score, 2);
});

test("answerQuestion rejects a null state", () => {
  assert.throws(() => answerQuestion(null, 0), TypeError);
});

test("nextQuestion advances the current index without mutating state", () => {
  const state = { questions: [{ answer: 0 }], current: 0, score: 0 };
  assert.deepEqual(nextQuestion(state), { ...state, current: 1 });
  assert.equal(state.current, 0);
});

test("isQuizFinished returns false before the last question", () => {
  assert.equal(isQuizFinished({ questions: [{}, {}], current: 0, score: 0 }), false);
});

test("isQuizFinished returns true at the question count", () => {
  assert.equal(isQuizFinished({ questions: [{}], current: 1, score: 0 }), true);
});

test("isQuizFinished returns true for an empty quiz", () => {
  assert.equal(isQuizFinished(createQuiz([])), true);
});

test("isQuizFinished rejects a null state", () => {
  assert.throws(() => isQuizFinished(null), TypeError);
});

test("calculatePercentage rounds to a whole number", () => {
  assert.equal(calculatePercentage(2, 3), 67);
});

test("calculatePercentage returns 0 when there are no questions", () => {
  assert.equal(calculatePercentage(0, 0), 0);
});

test("isNewBestScore returns true when there is no previous best", () => {
  assert.equal(isNewBestScore(0, null), true);
});

test("isNewBestScore returns true when the current score is higher", () => {
  assert.equal(isNewBestScore(81, 80), true);
});

test("isNewBestScore returns false when the current score ties the best", () => {
  assert.equal(isNewBestScore(80, 80), false);
});

test("isNewBestScore returns false when the current score is lower", () => {
  assert.equal(isNewBestScore(79, 80), false);
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
