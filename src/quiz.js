// Core quiz logic.
// This file has NO browser (DOM) code so it can be tested with Node.js.

/**
 * Returns a new array with the items in random order.
 * The original array is not changed.
 */
function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Returns true when the selected option is the correct one.
 */
function isCorrect(question, selectedIndex) {
  return question.answer === selectedIndex;
}

/**
 * Converts a score into a whole-number percentage (0-100).
 */
function calculatePercentage(score, total) {
  if (total === 0) return 0;
  return Math.round((score / total) * 100);
}

/**
 * Turns a percentage into a grade.
 * A = 90% or more, B = 75% or more, C = 50% or more.
 */
function getGrade(percentage) {
  if (percentage >= 90) return "A";
  if (percentage >= 75) return "B";
  if (percentage >= 50) return "C";
  return "Keep practicing";
}

/**
 * Returns an encouraging message for a grade.
 */
function getFeedbackMessage(grade) {
  if (grade === "A") return "Excellent work!";
  if (grade === "B") return "Great job!";
  if (grade === "C") return "Nice effort!";
  return "Keep practicing - you've got this!";
}

/**
 * Formats a non-negative whole number of seconds for the timer display.
 */
function formatTimeLeft(seconds) {
  if (!Number.isSafeInteger(seconds) || seconds < 0) {
    throw new RangeError("seconds must be a non-negative integer");
  }
  return `⏱ ${seconds}s`;
}

// Lets Node.js tests load this file. Browsers ignore this block.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { shuffle, isCorrect, calculatePercentage, getGrade, getFeedbackMessage, formatTimeLeft };
}
