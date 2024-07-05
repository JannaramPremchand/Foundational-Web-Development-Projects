import React, { useState, useEffect } from 'react';
import { QuizData } from '../Data/QuizData';
import QuizResult from './QuizResult';
// Function to shuffle the questions and select the first 5
const selectRandomQuestions = (data, numQuestions) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
};

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    useEffect(() => {
        const questions = selectRandomQuestions(QuizData, 5);
        setSelectedQuestions(questions);
    }, []);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < selectedQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true);
        }
    };

    const updateScore = () => {
        if (clickedOption === selectedQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
        const questions = selectRandomQuestions(QuizData, 5);
        setSelectedQuestions(questions);
    };

    if (selectedQuestions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p className="heading-txt">Quiz APP</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={selectedQuestions.length} tryAgain={resetAll} />
                ) : (
                    <>
                        <div className="question">
                            <span id="question-number">{currentQuestion + 1}. </span>
                            <span id="question-txt">{selectedQuestions[currentQuestion].question}</span>
                        </div>
                        <div className="option-container">
                            {selectedQuestions[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        className={`option-btn ${clickedOption === i + 1 ? "checked" : null}`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                        <button className="learn-more" id="next-button" onClick={changeQuestion}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Next</span>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
