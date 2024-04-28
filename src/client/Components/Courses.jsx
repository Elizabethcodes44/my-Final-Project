import  { useState } from 'react';
import './Courses.scss'; // Importing the CSS file
export default function Courses() {
  const [showResult, setShowResult]= useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);//because we are accesing this through an array
  const [answers, setAnswers] = useState(Array(5).fill(null)); // Array to store user's answers
  const questions = [
    {
      text: "Which tech course interest you the most?",
      options: [
        {id: 0, text:"Software Engineering"},
        {id: 1, text:"CyberSecurity"},
        {id: 2, text:"Data Analytics"},
        {id: 3, text:"Product Design UI/UX"},
        ]
    },
    {
      text: "Have you ever developed any software or applications?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        
        ]
    },
    {
      text: "Have you ever been concerned about the security of your online accounts or devices?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        ]
    },
    {
      text: "Are you interested in extracting insights from large datasets?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        ]
    },
    {
      text: "Do you have a creative eye for design and aesthetics?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        ]
    },
    {
      text: "Are you interested in learning about software architecture and design patterns?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        ]
    },
    {
      text: "Are you interested in learning how to protect digital assets from cyber threats?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        ]
    },
    {
      text: "Are you interested in creating user-friendly interfaces for digital products?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        ]
    },
    {
      text: "Do you see the value in using data to make informed decisions in various industries?",
      options: [
        {id: 0, text:"Yes"},
        {id: 1, text:"No"},
        ]
    },
  ]
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
    // Calculate the result based on the answers
    // For simplicity, let's assume the result is based on the most selected option
    const counts = [0, 0, 0, 0];
    answers.forEach((answer) => {
      if (answer !== null) {
        counts[answer]++;
      }
    });
    const maxCount = Math.max(...counts);
    return counts.indexOf(maxCount); // Index of the most selected option
  };

  const result = calculateResult();
  return (
    <>
    <div className='Quiz'>
      <h1>Tech Interest Quiz for expecting moms</h1>
      
{showResult ? (
  <div className='finalResult'><h1>Your Results</h1>
      <h2>Based on your answers you should take Cybersecurity courses! click the links below to start your tech Journey.</h2>
      {result === 1 && (
              <div>
                <a href="#">Link to CyberSecurity courses</a>
                {/* Add more links for other options */}
                </div>
            )}
       <button onClick={() => {
              setShowResult(false);
              setCurrentQuestion(0);
              setAnswers(Array(5).fill(null)); // Reset answers
            }}>Restart Quiz</button></div>
): (
<div className='questionCard'>
        <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
        <h2 className='questionText'>{questions[currentQuestion].text}</h2>
       
        <ul>
  {questions[currentQuestion].options.map((option) => {
    return (
      <li onClick={() => handleAnswerClick(option.id)} key={option.id}>{option.text}</li>
    );
  })}
</ul>

      </div>
)}
      
      
    </div>
    </>
  )
}




