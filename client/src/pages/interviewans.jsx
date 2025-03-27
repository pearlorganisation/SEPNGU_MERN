'use client';
import { useSearchParams } from 'next/navigation';
import { questions } from '../data/questions';
import { useState } from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

export default function InterviewAns() {
  const searchParams = useSearchParams();
  const topic = searchParams.get('topic'); // Get the topic from the query parameter
  const questionsList = topic ? questions[topic] : [];

  // State to manage visibility of answers for each question
  const [visibleAnswers, setVisibleAnswers] = useState({});

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the visibility of the answer for the given index
    }));
  };

  return (
    <div className="h-[100%] w-full bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-2xl text-white font-bold mb-4">
          {topic === 'fresher' ? 'Fresher' : 'Experienced'} Interview Questions
        </h1>
        {questionsList.map((q, index) => (
          <div key={index} className="mb-6">
            {/* Question Section */}
            <div
              className="flex justify-between cursor-pointer p-4 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-300"
              onClick={() => toggleAnswer(index)} // Toggle answer visibility on click
            >
              <div>
                <h2 className="text-xl text-white font-bold">Question:</h2>
                <p className="text-white text-xl font-semibold">{q.question.english}</p>
                <p className="text-white text-md font-semibold">{q.question.hindi}</p>
              </div>
              <span className="text-white font-bold text-md self-center">
                <FaArrowDown />
              </span>
            </div>

            {/* Answer Section (Visible only if toggled) */}
            {visibleAnswers[index] && (
              <div className="mt-2 p-4 bg-indigo-600 rounded-lg">
                <h2 className="text-xl text-white font-bold">Answer:</h2>
                <p className="text-white text-xl font-semibold">{q.answer.english}</p><br></br>
                {/* <h2 className="text-xl text-white font-semibold">उत्तर (Hindi):</h2> */}
                <p className="text-white text-md font-semibold">{q.answer.hindi}</p><br></br>
                <h2 className="text-xl text-white font-bold">Explanation:</h2>
                <p className="text-white text-xl font-semibold">{q.answer.explanation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}