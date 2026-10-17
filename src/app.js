// UI code: connects the quiz logic (quiz.js) to the page (index.html).

let state = createQuiz([]);
const QUESTION_TIME_LIMIT = 15;
const BEST_SCORE_STORAGE_KEY = "devDaysQuizBestPercentage";
let timerInterval = null;
let remainingSeconds = QUESTION_TIME_LIMIT;
let questionResolved = false;
let bestScore = null;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const progressText = document.getElementById("progress");
const timerText = document.getElementById("timer");
const questionText = document.getElementById("question-text");
const optionsList = document.getElementById("options");
const feedbackText = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");
const gradeText = document.getElementById("grade-text");
const bestScoreText = document.getElementById("best-score-text");
const resultBestScoreText = document.getElementById("result-best-score-text");
const newBestMessage = document.getElementById("new-best-message");

function loadBestScore() {
  try {
    const storedScore = window.localStorage.getItem(BEST_SCORE_STORAGE_KEY);
    if (storedScore === null) return null;
    const parsedScore = Number(storedScore);
    if (
      storedScore.trim() === "" ||
      !Number.isInteger(parsedScore) ||
      parsedScore < 0 ||
      parsedScore > 100
    ) {
      console.warn("The saved best score is invalid and will be ignored.");
      return null;
    }
    return parsedScore;
  } catch (error) {
    console.warn("Unable to read the saved best score.", error);
    return null;
  }
}

function renderStartBestScore() {
  bestScoreText.hidden = bestScore === null;
  bestScoreText.textContent = bestScore === null ? "" : `Best score: ${bestScore}%`;
}

function saveBestScore(percentage) {
  bestScore = percentage;
  renderStartBestScore();
  try {
    window.localStorage.setItem(BEST_SCORE_STORAGE_KEY, String(percentage));
  } catch (error) {
    console.warn("Unable to save the best score.", error);
  }
}

bestScore = loadBestScore();
renderStartBestScore();

function showScreen(screenToShow) {
  [startScreen, quizScreen, resultScreen].forEach((screen) => {
    screen.hidden = screen !== screenToShow;
  });
}

function startQuiz() {
  stopQuestionTimer();
  state = createQuiz(shuffle(QUESTIONS));
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  stopQuestionTimer();
  questionResolved = false;
  const question = state.questions[state.current];
  progressText.textContent = `Question ${state.current + 1} of ${state.questions.length}`;
  questionText.textContent = question.question;
  feedbackText.textContent = "";
  nextButton.hidden = true;
  optionsList.innerHTML = "";

  question.options.forEach((option, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index, button));
    item.appendChild(button);
    optionsList.appendChild(item);
  });

  startQuestionTimer();
}

function startQuestionTimer() {
  remainingSeconds = QUESTION_TIME_LIMIT;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    remainingSeconds--;
    updateTimerDisplay();
    if (remainingSeconds === 0) {
      resolveQuestion(null, null, true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  timerText.textContent = formatTimeLeft(remainingSeconds);
  timerText.classList.toggle("urgent", remainingSeconds <= 5);
}

function stopQuestionTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function selectAnswer(selectedIndex, selectedButton) {
  resolveQuestion(selectedIndex, selectedButton);
}

function resolveQuestion(selectedIndex, selectedButton, timedOut = false) {
  if (questionResolved) return;
  questionResolved = true;
  stopQuestionTimer();

  const question = state.questions[state.current];
  const buttons = optionsList.querySelectorAll("button");
  buttons.forEach((button) => (button.disabled = true));

  if (timedOut) {
    buttons[question.answer].classList.add("correct");
    feedbackText.textContent = "Time's up!";
  } else {
    const result = answerQuestion(state, selectedIndex);
    state = result.state;
    if (result.correct) {
      selectedButton.classList.add("correct");
      feedbackText.textContent = "Correct!";
    } else {
      selectedButton.classList.add("wrong");
      buttons[question.answer].classList.add("correct");
      feedbackText.textContent = "Not quite. The correct answer is highlighted.";
    }
  }

  nextButton.hidden = false;
  nextButton.focus();
}

function handleNextQuestion() {
  stopQuestionTimer();
  state = nextQuestion(state);
  if (!isQuizFinished(state)) {
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  stopQuestionTimer();
  const total = state.questions.length;
  const percentage = calculatePercentage(state.score, total);
  const newBest = isNewBestScore(percentage, bestScore);
  if (newBest) {
    saveBestScore(percentage);
  }
  scoreText.textContent = `You scored ${state.score} out of ${total} (${percentage}%)`;
  gradeText.textContent = `Grade: ${getGrade(percentage)}`;
  resultBestScoreText.textContent = `Best score: ${bestScore}%`;
  newBestMessage.hidden = !newBest;
  newBestMessage.textContent = newBest ? "🎉 New best score!" : "";
  showScreen(resultScreen);
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("restart-btn").addEventListener("click", startQuiz);
nextButton.addEventListener("click", handleNextQuestion);
