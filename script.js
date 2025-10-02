// Quiz data (5 questions)
const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<scripting>", "<javascript>", "<script>"],
    answer: "<script>"
  },
  {
    question: "Which company developed Java?",
    options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
    answer: "Sun Microsystems"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>"
  }
];

// Save answer and move to next page
function saveAnswer(qIndex, selectedOption, nextPage) {
  let answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
  answers[qIndex] = selectedOption;
  localStorage.setItem("quizAnswers", JSON.stringify(answers));
  window.location.href = nextPage;
}

// Show result
function showResult() {
  let answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};
  let score = 0;

  questions.forEach((q, index) => {
    if (answers[index] === q.answer) {
      score++;
    }
  });

  document.getElementById("score").textContent =
    You scored ${score} out of ${questions.length};
  localStorage.clear();
}
