import  { useState } from 'react';
import './Courses.css'; // Importing the CSS file

// Define the quiz questions and their corresponding career paths
const quizQuestions = [
  {
    question: 'What aspect of technology interests you the most?',
    options: ['Programming', 'Networking', 'Security', 'Data Analysis'],
  },
  {
    question: 'Which environment do you prefer to work in?',
    options: ['Office', 'Remote', 'Both', 'Doesn\'t matter'],
  },
  // Add more questions as needed
];

const Courses = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  
  const handleOptionSelect = (option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = option;
    setSelectedOptions(updatedSelectedOptions);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOptions([]);
    setShowResult(false);
  };

  return (
    <div id = "courses" className='course_Container'>
      {showResult ? (
        <div>
          <h2>Recommended Career Path: Cybersecurity</h2>
          <p>Here are some free resources to get started:</p>
          <ul>
            <li><a href="https://example.com">Free Cybersecurity Course 1</a></li>
            <li><a href="https://example.com">Free Cybersecurity Course 2</a></li>
            {/* Add more links as needed */}
          </ul>
          <button onClick={resetQuiz}>Take Quiz Again</button>
        </div>
      ) : (
        <div>
          <h2>{quizQuestions[currentQuestion].question}</h2>
          <ul>
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleOptionSelect(option)}>{option}</button>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Courses;




