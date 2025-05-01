import React, { useState } from 'react';
import './App.css';

const quizData = [
    { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswer: 'Mars' },
    { question: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], correctAnswer: 'Pacific Ocean' },
    { question: 'What is the boiling point of water at sea level?', options: ['90°C', '95°C', '100°C', '105°C'], correctAnswer: '100°C' },
    { question: 'Which language is primarily spoken in Brazil?', options: ['Spanish', 'Portuguese', 'English', 'French'], correctAnswer: 'Portuguese' },
    { question: 'How many continents are there?', options: ['5', '6', '7', '8'], correctAnswer: '7' },
    { question: 'Who painted the Mona Lisa?', options: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'], correctAnswer: 'Leonardo da Vinci' },
    { question: 'What gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correctAnswer: 'Carbon Dioxide' },
    { question: 'What is the main ingredient in sushi?', options: ['Pasta', 'Rice', 'Bread', 'Corn'], correctAnswer: 'Rice' },
    { question: 'What is the currency of Japan?', options: ['Won', 'Yuan', 'Dollar', 'Yen'], correctAnswer: 'Yen' },
    { question: 'Which organ pumps blood throughout the human body?', options: ['Lungs', 'Liver', 'Heart', 'Brain'], correctAnswer: 'Heart' },
    { question: 'Which is the smallest prime number?', options: ['0', '1', '2', '3'], correctAnswer: '2' },
    { question: 'In what year did the Titanic sink?', options: ['1910', '1912', '1914', '1916'], correctAnswer: '1912' },
    { question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Gd', 'Go'], correctAnswer: 'Au' },
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], correctAnswer: 'Paris' },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
    { question: 'Who wrote "Romeo and Juliet"?', options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], correctAnswer: 'William Shakespeare' },
    { question: 'Which country is known as the Land of the Rising Sun?', options: ['China', 'Thailand', 'Japan', 'South Korea'], correctAnswer: 'Japan' },
    { question: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'], correctAnswer: 'Blue Whale' },
    { question: 'Which element has the atomic number 1?', options: ['Oxygen', 'Helium', 'Hydrogen', 'Carbon'], correctAnswer: 'Hydrogen' },
    { question: 'Who was the first man to walk on the moon?', options: ['Buzz Aldrin', 'Yuri Gagarin', 'Michael Collins', 'Neil Armstrong'], correctAnswer: 'Neil Armstrong' }  
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            {showResult ? (
                <div className="result">
                    <p>Your score: {score} out of {quizData.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="question">
                        <p>{quizData[currentQuestion].question}</p>
                    </div>
                    <div className="options">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <div key={index} className="option" onClick={() => handleAnswerClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default App;