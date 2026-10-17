---
applyTo: "tests/**/*.js"
---
- Use only `node:test` and `node:assert/strict`. No other test libraries.
- One behaviour per test. Name tests "<function> <does what> <when>".
- Always cover edge cases: boundaries, empty input, null.
- Only test functions exported from src/*.js. Never test DOM code.