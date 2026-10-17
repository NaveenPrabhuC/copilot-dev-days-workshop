// Quiz questions.
// "answer" is the index (starting at 0) of the correct option.
const QUESTIONS = [
  {
    question: "Which command creates a new Git branch and switches to it?",
    options: ["git branch -d", "git switch -c", "git merge", "git push -u"],
    answer: 1,
  },
  {
    question: "Which file does GitHub show as a repository's front page?",
    options: ["index.txt", "README.md", "HOME.md", "about.html"],
    answer: 1,
  },
  {
    question: "What does PR stand for on GitHub?",
    options: ["Pull request", "Push release", "Project review", "Public repository"],
    answer: 0,
  },
  {
    question: "In GitHub Copilot, which key accepts an inline suggestion?",
    options: ["Enter", "Esc", "Tab", "Shift"],
    answer: 2,
  },
  {
    question: "Which file gives Copilot custom instructions for a repository?",
    options: [".github/copilot-instructions.md", "copilot.json", ".vscode/ai.txt", "package.json"],
    answer: 0,
  },
  {
    question: "What does `git clone` do?",
    options: [
      "Deletes a repository",
      "Copies a remote repository to your computer",
      "Creates a new branch",
      "Merges two branches",
    ],
    answer: 1,
  },
  {
    question: "Where are GitHub Actions workflow files stored?",
    options: [".github/workflows", ".git/actions", "src/actions", "workflows/"],
    answer: 0,
  },
  {
    question: "Which YAML key defines when a workflow runs?",
    options: ["name", "jobs", "on", "steps"],
    answer: 2,
  },
  {
    question: "Which event runs a workflow on a manual button click?",
    options: ["push", "schedule", "workflow_dispatch", "fork"],
    answer: 2,
  },
];

// Lets Node.js tests load this file. Browsers ignore this block.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUESTIONS };
}
