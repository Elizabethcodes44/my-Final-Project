import { useState } from "react";
import "./Courses.scss"; // Importing the CSS file
export default function Courses() {
  const [showResult, setShowResult] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0); //because we are accesing this through an array
  const [answers, setAnswers] = useState(Array(8).fill(null)); // Array to store user's answers
  const questions = [
    {
      text: "Do you wish to develop or build an application from start to finish?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Have you ever been concerned about the security of your online accounts or devices?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Are you interested in extracting insights from large datasets?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Do you have a creative eye for design and aesthetics?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Are you interested in learning about software architecture and design patterns?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Are you interested in learning how to protect digital assets from cyber threats?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Are you interested in creating user-friendly interfaces for digital products?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
    {
      text: "Do you see the value in using data to make informed decisions in various industries?",
      options: [
        { id: 0, text: "Yes" },
        { id: 1, text: "No" },
      ],
    },
  ];
  const handleAnswerClick = (optionId) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionId;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1); // Move to the next question
    } else {
      setShowResult(true); // Show result once all questions are answered
    }
  };
  const calculateResult = () => {
    // Check conditions based on the user's answers to specific questions
    if (answers[0] === 0 && answers[4] === 0) {
      // If first and fifth questions are 'Yes'
      return 0; // Return index of Software Engineering
    } else if (answers[1] === 0 && answers[5] === 0) {
      // If second and sixth questions are 'Yes'
      return 1; // Return index of Cybersecurity
    } else if (answers[2] === 0 && answers[7] === 0) {
      // If third and eighth questions are 'Yes'
      return 2; // Return index of Data Analytics
    } else if (answers[3] === 0 && answers[6] === 0) {
      // If fourth and seventh questions are 'Yes'
      return 3; // Return index of Product Design
    } else {
      // Calculate the result based on the most selected option
      const counts = [0, 0, 0, 0];
      answers.forEach((answer) => {
        if (answer !== null) {
          counts[answer]++;
        }
      });
      const maxCount = Math.max(...counts);
      return counts.indexOf(maxCount); // Index of the most selected option
    }
  };

  const result = calculateResult();
  return (
    <>
      <div className="Quiz">
        <h1 className="H1">Tech Interest Quiz for expecting moms</h1>
        {showResult ? (
          <div className="finalResult">
            <h1 className="H11">Your Results</h1>
            <h2 className="H2">
              Based on your answers you should take{" "}
              {result === 0
                ? "Software Engineering"
                : result === 1
                ? "Cybersecurity"
                : result === 2
                ? "Data Analytics"
                : "Product Design"}{" "}
              courses! Click the links below to start your tech journey.
            </h2>
            {result === 0 && (
              <div>
                <a href="https://codefirstgirls.com/courses/">
                  Code first girls
                </a><br></br>
                <a href="https://www.theodinproject.com/">Odin Project</a> <br></br>
                <a href="https://www.freecodecamp.org/news/learn-full-stack-development-html-css-javascript-node-js-mongodb/">
                  Free code camp
                </a> <br></br>
                <a href="https://boolean.co.uk/fundamentals">
                  Boolean UK
                </a>
              </div>
            )}
            {result === 1 && (
              <div>
                <a href="https://www.coursera.org/professional-certificates/google-cybersecurity">Google Cybersecurity Professional  certificate</a> <br></br>
                <a href="https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst">IBM Cybersecurity Analyst Professional  certificate</a>
              </div>
            )}
            {result === 2 && (
              <div>
                <a href="https://www.coursera.org/professional-certificates/google-data-analytics">Google Data Analytics Professional Course</a> <br></br>
                <a href="https://www.coursera.org/learn/introduction-to-data-analytics">IBM Introduction to Data Analytics</a> <br></br>
                <a href="https://www.coursera.org/learn/business-analytics-excel">John Hopkins University</a>
              </div>
            )}
            {result === 3 && (
              <div>
                <a href="https://www.udacity.com/course/product-design--ud509">UDACITY</a> <br></br>
                <a href="https://www.udacity.com/course/product-design--ud509">Great Learning</a>
              </div>
            )}
            <button
              onClick={() => {
                setShowResult(false);
                setCurrentQuestion(0);
                setAnswers(Array(8).fill(null)); // Reset answers
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="questionCard">
            <h2>
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
            <h2 className="questionText">{questions[currentQuestion].text}</h2>
            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => handleAnswerClick(option.id)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
