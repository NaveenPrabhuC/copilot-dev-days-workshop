---
name: add-quiz-questions
description: Add new multiple-choice questions to the Dev Days Quiz. Use when asked to add, write or generate quiz questions.
---

# Add quiz questions

1. Read `src/questions.js` and match the object shape exactly: `{ question, options, answer }`.
2. Every question has exactly 4 options. `answer` is the zero-based index of the correct option.
3. Spread correct answers across positions 0-3. No "all of the above" or trick questions.
4. Keep questions under 100 characters, factual and verifiable. Don't duplicate existing ones.
5. If the start screen in `src/index.html` mentions a question count, update it.
6. Run `npm test` (it validates the question data) and fix any failures.
7. Finish with a table: question, correct answer, and a one-line source or explanation.