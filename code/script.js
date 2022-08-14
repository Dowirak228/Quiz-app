const quizData = [
   {
       question: "What is the most used programming language in 2019?",
       a: "Java",
       b: "C",
       c: "Python",
       d: "JavaScript",
       correct: "d",
   },
   {
       question: "Who is the President of US?",
       a: "Florin Pop",
       b: "Donald Trump",
       c: "Ivan Saldano",
       d: "Mihai Andrei",
       correct: "b",
   },
   {
       question: "What does HTML stand for?",
       a: "Hypertext Markup Language",
       b: "Cascading Style Sheet",
       c: "Jason Object Notation",
       d: "Helicopters Terminals Motorboats Lamborginis",
       correct: "a",
   },
   {
       question: "What year was JavaScript launched?",
       a: "1996",
       b: "1995",
       c: "1994",
       d: "none of the above",
       correct: "b",
   },
];

const questionEl = document.getElementById("question")
const a_textEl = document.getElementById("a_text")
const b_textEl = document.getElementById("b_text")
const c_textEl = document.getElementById("c_text")
const d_textEl = document.getElementById("d_text")
const submitBtnEl = document.getElementById("submitBtn")

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {

   const currentQuizData = quizData[currentQuiz];
   
   questionEl.innerText = currentQuizData.question
   a_textEl.innerText = currentQuizData.a
   b_textEl.innerText = currentQuizData.b
   c_textEl.innerText = currentQuizData.c
   d_textEl.innerText = currentQuizData.d

   currentQuiz++;
};


submitBtnEl.addEventListener('click', () => {

   if (currentQuiz < quizData.length) {
      loadQuiz();
   } else {
      alert("You finished quiz")
   }
})