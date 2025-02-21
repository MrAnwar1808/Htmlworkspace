// Define the questions, options, and correct answers
const questions = [
    {
      question: "What is the capital of India?",
      options: ["Chennai", "Hyderabad", "New Delhi", "Bangalore"],
      correct: 2 // 0-based index, so correct is 'New Delhi'
    },
    {
      question: "Which language is used for web development?",
      options: ["CCNA", "JavaScript", "C", "C++"],
      correct: 1
    },
    {
      question: "Who is the President of the USA?",
      options: ["Barack Obama", "Donald Trump", "Joe Biden", "George W. Bush"],
      correct: 1
    },
    {
      question: "Who is the Prime Minister of India?",
      options: ["Jawaharlal Nehru", "Atal Bihari Vajpayee", "Manmohan Singh", "Narendra Modi"],
      correct: 3
    },
    {
      question: "What is 2+2-2*2/2?",
      options: ["1", "2", "3", "4"],
      correct: 1
    }
  ];
  
  // Initialize the quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to display the current question and options
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous options
  
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.classList.add('option');
      button.textContent = option;
      button.onclick = () => selectAnswer(index);
      optionsContainer.appendChild(button);
    });
  
    // Disable the next button initially
    document.getElementById('next-btn').disabled = true;
  
    // Reset the options state
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
      option.disabled = false;
      option.classList.remove('selected', 'incorrect');
    });
  }
  
  // Function to handle the selection of an answer
  function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true); // Disable all options
  
    const selectedOption = options[selectedIndex];
    selectedOption.classList.add('selected'); // Mark the selected option
  
    if (selectedIndex === correctIndex) {
      score++;
    } else {
      selectedOption.classList.add('incorrect'); // Mark incorrect answer
    }
  
    // Enable the "Next" button
    document.getElementById('next-btn').disabled = false;
  }
  
  // Function to move to the next question or show the score if it's the last question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }
  
  // Function to display the score after the quiz ends
  function displayScore() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('score-container').classList.remove('hidden');
  
    const scoreMessage = score >= 4 ? "Excellent!" : (score >= 2 ? "Good try!" : "Try again!");
    document.getElementById('score').textContent = score;
    document.getElementById('score-message').textContent = scoreMessage;
  }
  
  // Function to reset the quiz and start again
  function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score-container').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    displayQuestion();
    document.getElementById('next-btn').disabled = true;
  }
  
  // Initialize the quiz by displaying the first question
  displayQuestion();
  