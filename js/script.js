const QuizQuestions = [
    {
      question: "What is the name of the paper company where most of the action in 'The Office' takes place?",
      answers: ["Dunder Mifflin", "Scranton Paper Co.", "Wernham Hogg", "Paper Paradise"],
      correctAnswer: "Dunder Mifflin",
    },
    {
      question: "Who is known for his constant pranks on his deskmate, Dwight Schrute?",
      answers: ["Oscar Martinez", "Stanley Hudson", "Jim Halpert", "Kevin Malone"],
      correctAnswer: "Jim Halpert",
    },
    {
      question: "Who is the regional manager of Dunder Mifflin's Scranton branch at the start of the series?",
      answers: ["Jim Halpert", "Michael Scott", "Pam Beesly", "Ryan Howard"],
      correctAnswer: "Michael Scott",
    },
    {
      question: "Michael and Dwight tried to steal clients from which local competing business?",
      answers: ["Paper Mill", "Prince Family Paper", "Great Paper", "Stapels"],
      correctAnswer: "Prince Family Paper.",
    },
    {
      question: "Finish Dwight's security code: 'The tea in Nepal is very hot...'",
      answers: ["But the coffee in Peru is much hotter.", "Bears, beets, Battlestar Galactica.", "Schrute Farms, Bed & Breakfast.", "Dunder Mifflin, the paper people."],
      correctAnswer: "But the coffee in Peru is much hotter.",
    },
    {
      question: "What is the title of Michael's movie?",
      answers: ["Threat Level Midnight.", "The Dundies", "Scott's Tots", "Paper Jam"],
      correctAnswer: "Threat Level Midnight."
    },
    {
      question: "What is the name of Dwight's porcupine?",
      answers: ["Henrietta.", "Spike", "Prickles", "Quilliam"],
      correctAnswer: "Henrietta."
    },
    {
      question: "Who is known for his obsession with bears, beets, and 'Battlestar Galactica'?",
      answers: ["Jim Halpert", "Andy Bernard", "Dwight Schrute", "Oscar Martinez"],
      correctAnswer: "Dwight Schrute",
    },
    {
      question: "Which character's catchphrase is 'That's what she said'?",
      answers: ["Michael Scott", "Jim Halpert", "Ryan Howard", "Angela Martin"],
      correctAnswer: "Michael Scott",
    },
    {
      question: "Which of Angela's cats did Dwight kill?",
      answers: ["Bandit.", "Smokey.", "Fluffy.", "Sprinkles."],
      correctAnswer: "Sprinkles.",
    }
  ];
  
  // Define variables to track the current question index and user's score.
  let currentQuestionIndex = 0;
  let userScore = 0;


  // Function to create the "start" button dynamically.
  function createStartButton() {
    const quizBox = document.getElementById("quizBox")
  

  // Create the button element
  const startButton = document.createElement("button");
  startButton.textContent = "Start Quiz Here!";
  startButton.addEventListener("click", startQuiz);

  // Append the button to the container.
  quizBox.appendChild(startButton);
}

// Function to start the quiz.
function startQuiz() {
    // Hide the "Start" button by removing it from the DOM.
    const startButton = document.querySelector("quizBox button");
    startButton.remove();

    // Display the first question.
    displayQuestion(currentQuestionIndex);
}

// Call the function to create the "Start" button when the page loads.

createStartButton();

// Function to display a question.
function displayQuestion(questionIndex) {
    const quizBox = document.getElementById("quizBox")
    const questionDiv = document.createElement("div");

    // Display the question text.
    const questionText = document.createElement("p");
    questionText.textContent = QuizQuestions[questionIndex].question;
    questionDiv.appendChild(questionText);

    // Display answer choices with radio buttons.
    const answerChoices = QuizQuestions[questionIndex].answers;
    answerChoices.forEach((choice, index) => {
        const choicelabel = document.createElement("label");
        const choiceInput = document.createElement("input");
        choiceInput.type = "radio";
        choiceInput.name = "answer";
        choice.value = choice;
        choicelabel.appendChild(choiceInput);
        choicelabel.appendChild(document.createTextNode(choice));
        questionDiv.appendChild(choiceLabel);
    });

    // Append the question to the quiz container.
    quizBox.appendChild(questionDiv);
}

// Call displayQuestion to display the first question when the quiz starts.
displayQuestion(currentQuestionIndex);