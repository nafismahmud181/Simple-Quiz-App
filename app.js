const questions = [
    {
      "question": "What is the capital of France?",
      "answers": [
        { "text": "Paris", "correct": true },
        { "text": "Berlin", "correct": false },
        { "text": "London", "correct": false },
        { "text": "Rome", "correct": false }
      ]
    },
    {
      "question": "Who painted the Mona Lisa?",
      "answers": [
        { "text": "Leonardo da Vinci", "correct": true },
        { "text": "Vincent van Gogh", "correct": false },
        { "text": "Pablo Picasso", "correct": false },
        { "text": "Michelangelo", "correct": false }
      ]
    },
    {
      "question": "What is the largest planet in our solar system?",
      "answers": [
        { "text": "Jupiter", "correct": true },
        { "text": "Mars", "correct": false },
        { "text": "Earth", "correct": false },
        { "text": "Saturn", "correct": false }
      ]
    },
    {
      "question": "Who wrote 'Romeo and Juliet'?",
      "answers": [
        { "text": "William Shakespeare", "correct": true },
        { "text": "Charles Dickens", "correct": false },
        { "text": "Jane Austen", "correct": false },
        { "text": "Mark Twain", "correct": false }
      ]
    },
    {
      "question": "What is the chemical symbol for water?",
      "answers": [
        { "text": "H2O", "correct": true },
        { "text": "CO2", "correct": false },
        { "text": "NaCl", "correct": false },
        { "text": "O2", "correct": false }
      ]
    }
  ];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else{
        selectedBtn.classList.add("incorrect");
    }
}
startQuiz();
