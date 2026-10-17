![Tests](https://github.com/mdansaridw/copilot-dev-days-workshop/actions/workflows/test.yml/badge.svg)

# 🚀 GitHub Copilot Dev Days: Hands-on Workshop

**10:45 – 13:30 IST · Intermediate · 10 chapters + bonus · Works on GitHub Copilot Free**

Take a small quiz web app through a realistic engineering workflow with GitHub Copilot: **instructions → plan → build → debug → refactor → CI → skills → issue → pull request → ship**.

At the event, the **hands-on session is guided in VS Code**: everyone follows along together with the speakers. The same workshop is also written for **Copilot CLI** and the **GitHub Copilot app**, to do at home at your own pace. Questions on those? Contact us at <https://www.linkedin.com/company/azure-developer-community-tamilnadu/>.

## 🏠 Prerequisites: complete at home before the workshop

The workshop starts at **10:45 IST sharp** and there is **no setup time on the day**. The workshop repo link is shared in the hall at 10:45, so please finish these steps at home first (about 20–30 minutes).

**Everyone**

- [ ] **Laptop and charger,** with admin rights to install software (or use GitHub Codespaces in a browser).
- [ ] **A personal GitHub account** (<https://github.com/signup>). Work-managed accounts may have Copilot blocked by company policy.
- [ ] **GitHub Copilot enabled:** turn on **Copilot Free** at <https://github.com/settings/copilot>. Any paid plan also works.
- [ ] **At least 25 Copilot chat requests left this month** (same settings page). The workshop uses about 12–16.
- [ ] **Git** (<https://git-scm.com/>) and **Node.js 20 or newer** (<https://nodejs.org/>). Check with `git --version` and `node --version`. Not needed if you'll use GitHub Codespaces.
- [ ] **Your 2FA device** on the day, so you can sign in to GitHub.

**For the guided session: VS Code**

- [ ] Install the latest [VS Code](https://code.visualstudio.com/) and the [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension.
- [ ] Sign in to GitHub from the **Accounts** menu (bottom-left). The Copilot icon in the status bar should show your plan, and the Chat view should list **Agent** and **Plan** modes.
- [ ] In Settings, search **GitHub MCP** and enable it if available.
- [ ] Check the GitHub MCP server is running: Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) → **MCP: List Servers** → **github** shows **Running**.

**Optional, for the self-paced guides at home**

| Guide | Install | Sign in and check |
|---|---|---|
| **Copilot CLI** | [GitHub CLI](https://cli.github.com/) (`gh`) and [Copilot CLI](https://docs.github.com/copilot/how-tos/set-up/install-copilot-cli) | Run `gh auth login`, then `gh auth refresh -h github.com -s workflow`. Run `copilot` once, sign in, then `/exit`. |
| **Copilot app** | The [GitHub Copilot app](https://gh.io/app) (desktop only) | Open the app and sign in to GitHub. |

**Locked-down laptop?** Use **GitHub Codespaces** in a browser instead of installing VS Code, Git and Node.

## 🧭 The guides

| | 🖥️ **VS Code** | ⌨️ **Copilot CLI** | 🪟 **Copilot app** |
|---|---|---|---|
| **When** | **Guided, in the hall** | Self-paced, at home | Self-paced, at home |
| **Guide** | [workshops/vscode.md](workshops/vscode.md) | [workshops/cli.md](workshops/cli.md) | [workshops/copilot-app.md](workshops/copilot-app.md) |
| **Signature features** | Completions, next edit suggestions, Plan/Agent modes, GitHub MCP | `/plan`, `/diff`, `/context`, `/worktree`, side panel, `/pr create`, `!` commands | Interactive/Plan sessions, integrated browser + element picker, worktree sessions, Create PR |
| **Install** | VS Code, Git, Node 20+ | Copilot CLI, Git, Node 20+, `gh` | Copilot app, Node 20+, Git |
| **Codespaces?** | ✅ | ✅ | ❌ desktop only |
| **Requests (core)** | ≈ 14–16 | ≈ 12–14 | ≈ 13–15 |

All three guides build the **same features on the same starter code**, so after the session you can repeat it at home in the CLI or the app. **Questions on the self-paced guides?** Contact us at <https://www.linkedin.com/company/azure-developer-community-tamilnadu/>.

## 📚 Chapters (same in every guide)

| # | Chapter | Time (IST) | You'll learn |
|---|---|---|---|
| 0 | Setup in the hall | 10:45 – 10:50 | Your repo copy and first run (tools installed at home) |
| 1 | Warm-up | 10:50 – 11:05 | The core loop on your surface |
| 2 | Instructions | 11:05 – 11:20 | `/init`, path-specific instructions, context |
| ☕ | Break | 11:20 – 11:50 | |
| 3 | Plan → build | 11:50 – 12:10 | Plan mode for a multi-file feature (countdown timer) |
| 4 | Debug | 12:10 – 12:20 | Agent-driven red → green on a planted bug |
| 5 | Refactor | 12:20 – 12:30 | Behaviour-preserving refactor guarded by tests |
| 6 | CI | 12:30 – 12:40 | GitHub Actions workflow + status badge |
| 7 | Agent skills | 12:40 – 12:50 | Packaging team know-how as a reusable skill |
| 8 | Backlog | 12:50 – 13:00 | Creating well-specified issues from Copilot |
| 9 | Issue → PR → merge | 13:00 – 13:25 | Isolated branch/worktree, PR with green CI, Free-friendly review |
| 10 | Ship & retro | 13:25 – 13:30 | GitHub Pages, usage check, reflection |
| ⭐ | Bonus | early finishers / later | Audit, custom reviewer agent, parallel work, surface extras |

Times are for the guided VS Code session. In the self-paced guides, go at your own pace; each chapter shows a suggested duration.

Chapters are **independent**: if you fall behind, take the chapter's **🏃 Behind?** shortcut and keep going.

## 🏛️ On the day: 10:45 IST, in the hall

1. The speakers share the workshop repo link.
2. Click **Use this template → Create a new repository** → name `copilot-dev-days-workshop` → **Public**.
3. Open **`workshops/vscode.md`** and follow the **In the hall** steps of **Chapter 0**.
4. You're ready when `npm test` shows **8 passing and 1 failing** test. The failure is expected; you'll fix it in Chapter 4.

## 💳 About Copilot Free

About **2,000 completions** and **50 chat/agent requests** per month (limits can change). Guides mark every request with **💬**, give request-free 🏃 shortcuts, and avoid paid-only features (Copilot code review, cloud sessions, `/delegate`).

## 🗂 Repository layout

```
copilot-dev-days-workshop/
├── README.md               ← this page: overview and prerequisites
├── workshops/
│   ├── vscode.md           ← guided session (VS Code)
│   ├── cli.md              ← self-paced (Copilot CLI)
│   └── copilot-app.md      ← self-paced (Copilot app)
├── package.json            ← npm test / npm start (no dependencies)
├── index.html              ← redirects GitHub Pages visitors to src/
├── src/                    ← the quiz: index.html, style.css, questions.js, quiz.js, app.js
└── tests/
    ├── quiz.test.js        ← logic tests (one fails on purpose!)
    └── questions.test.js   ← validates quiz data
```

---

Adapted from the [Copilot Workshops](https://github-samples.github.io/copilot-workshops/) first-steps workshops by James Montemagno ([github-samples/copilot-workshops](https://github.com/github-samples/copilot-workshops), MIT License).
