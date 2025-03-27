import React, { useState } from "react";
import questions from "../data/quizdata";

const levels = ["bronze", "silver", "gold"]; // Levels

const Quiz = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [isCelebrating, setIsCelebrating] = useState(false);

  const level = levels[levelIndex];
  const quizQuestions = questions[level] || [];


  if (quizQuestions.length === 0) {
    return (
      <div className=" bg-gradient-to-r from-emerald-800 to-red-800 min-h-screen flex flex-col items-center justify-center text-white">
        <div className="bg-gradient-to-r from-emerald-800 to-red-800 p-6 rounded-lg shadow-xl w-full max-w-lg text-center">
          <h2 className="text-3xl font-bold text-indigo-400 mb-4">
            No Questions Found for {level.toUpperCase()} Level
          </h2>
          <p className="text-lg text-gray-400">
            Please check the quiz data or try another level.
          </p>
        </div>
      </div>
    );
  }

  const handleAnswerClick = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);
    setAttempts(attempts + 1);

    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        checkLevelCompletion();
      }
    }, 1000);
  };

  const checkLevelCompletion = () => {
    if (score >= 25) {
      if (levelIndex + 1 < levels.length) {
        setLevelIndex(levelIndex + 1);
        setCurrentQuestion(0);
        setScore(0);
        setAttempts(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
      }else {
        setIsCelebrating(true);
        startCelebration();
      }
    } else {
      alert(`😢 You scored ${score}. Try again!`);
      setCurrentQuestion(0);
      setScore(0);
      setAttempts(0);
      setCorrectAnswers(0);
      setIncorrectAnswers(0);
    }
  };

  const startCelebration = () => {
    const duration = 5000; // Celebration duration in milliseconds
    const interval = 100; // Interval between firecrackers

    const celebrationInterval = setInterval(() => {
      createFirecracker();
    }, interval);

    setTimeout(() => {
      clearInterval(celebrationInterval);
      setIsCelebrating(false);
    }, duration);
  };

  const createFirecracker = () => {
    const firecracker = document.createElement('div');
    firecracker.classList.add('firecracker');
    firecracker.style.left = `${Math.random() * 100}%`;
    firecracker.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(firecracker);

    setTimeout(() => {
      firecracker.remove();
    }, 1000);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        {isCelebrating && (
        <div className="celebration">
          <div className="celebration-message">
            🎉 Congratulations! You completed all levels! 🎉
          </div>
        </div>
      )}
      <div className="bg-gray-900 p-3 rounded-lg shadow-xl w-full max-w-lg">
      <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-white">
            📊 Scoreboard
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-2 text-lg">
            <p className="bg-gray-700 p-2 rounded-lg">
              🏆 Score:{" "}
              <span className="font-bold text-green-400">{score}</span>
            </p>
            <p className="bg-gray-700 p-2 rounded-lg">
              🔄 Attempts:{" "}
              <span className="font-bold text-yellow-400">{attempts}</span>
            </p>
            <p className="bg-gray-700 p-2 rounded-lg">
              ✅ Correct:{" "}
              <span className="font-bold text-green-400">{correctAnswers}</span>
            </p>
            <p className="bg-gray-700 p-2 rounded-lg">
              ❌ Incorrect:{" "}
              <span className="font-bold text-red-400">{incorrectAnswers}</span>
            </p>
          </div>
        </div>

        {/* Level Update Message */}
        <div className="text-center mt-2">
          <p className="text-lg text-gray-400">
            {score >= 25
              ? "🎉 You can move to the next level!"
              : "Score at least 25 to proceed next level!"}
          </p>
        </div><br></br>
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          {level.toUpperCase()} LEVEL
        </h2>

        {/* Question Box */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
          <p className="text-lg font-semibold">
            {quizQuestions[currentQuestion].question}
          </p>
        </div>

        {/* Answer Options */}
        <div className="mt-4 flex flex-col space-y-3">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-lg font-semibold rounded-lg transition duration-300 ${
                selectedAnswer
                  ? option === quizQuestions[currentQuestion].answer
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="inline-block text-center ml-20 mt-2 mr-20 ">
        <h5>क्या आप जानते हैं?</h5>
        <p className="font-medium">जब आप इस Quizz Game में अपने सभी स्तरों को पूरा कर लेंगे तो उसका एक स्क्रीनशॉट लें, <br></br>और हमारे Customer Care नंबर के साथ साझा करें, इससे अगली बार जब आप अपना प्लान खरीदेंगे <br></br>तो आपको उस पर डिस्काउंट ऑफर मिलता है।</p>
      </div>
    </div>
  );
};

export default Quiz;