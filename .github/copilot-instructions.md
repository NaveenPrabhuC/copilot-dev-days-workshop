# Repository Instructions

## Project structure

This is a dependency-free static quiz app, not a bundled application. `src/index.html` loads the classic scripts in order: `questions.js` defines the question data, `quiz.js` provides reusable quiz logic, and `app.js` connects that logic to the DOM. Keep the core functions in `quiz.js` browser-independent so they remain testable with Node. The repository-root `index.html` redirects GitHub Pages visitors to the app under `src/`.

Question records in `src/questions.js` use a zero-based `answer` index into `options`; `tests/questions.test.js` checks the data shape and uniqueness.

## Build, test, and run

- `npm start` serves `src/` at `http://localhost:8080`.
- `npm test` runs both test files with Node's built-in test runner.
- Run one matching test with `node --test --test-name-pattern="getGrade gives an A for exactly 90%" tests/quiz.test.js`; replace the pattern and file to target another test.
- There are no build or lint scripts. Node.js 20 or newer is the documented runtime.

The starter deliberately has one failing test: `getGrade gives an A for exactly 90%`. The workshop expects 8 passing tests and this single failure until the Chapter 4 debugging exercise; don't treat it as a regression or fix it during unrelated work.

## Code conventions

- Keep browser code as classic scripts: `src/index.html` relies on globals and script order. `src/quiz.js` and `src/questions.js` expose CommonJS exports only behind the existing `module` guard so the same source works in Node tests and the browser.
- Keep DOM/event handling in `src/app.js` and pure quiz calculations in `src/quiz.js`.
- Tests use `node:test` and `node:assert/strict`; quiz data has its own validation tests in `tests/questions.test.js`.
- `workshops/vscode.md`, `workshops/cli.md`, and `workshops/copilot-app.md` are parallel guides to the same staged workshop. Keep their descriptions and exercise steps aligned when changing the starter app or its expected behavior.
