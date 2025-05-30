import React, { useEffect, useState } from 'react';

const URL = 'https://opentdb.com/api.php?amount=12&category=18&difficulty=easy&type=multiple';

const Quiz = () => {
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0); // Track retry attempts

  const fetchQuestions = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After') || 5; // Default to 5 seconds
          throw new Error(`Rate limit exceeded: 429. Retry after ${retryAfter} seconds`);
        }
        throw new Error(`Failed to fetch questions: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      if (data.results && Array.isArray(data.results)) {
        setQuestions(data.results);
        setError(null);
        setRetryCount(0); // Reset retry count on success
      } else {
        throw new Error('Invalid API response: No results found');
      }
    } catch (err) {
      setError(err.message);
      if (err.message.includes('429') && retryCount < 3) {
        const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff: 1s, 2s, 4s
        setTimeout(() => {
          setRetryCount(retryCount + 1);
          fetchQuestions(); // Retry fetch
        }, delay);
      }
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    fetchQuestions(); // Fetch new questions on restart
  };

  const retryFetch = () => {
    setError(null);
    setQuestions(null);
    setRetryCount(0);
    fetchQuestions();
  };

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={retryFetch}>Retry</button>
      </div>
    );
  }

  if (!questions) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className='flex flex-col justify-center items-center bg-black w-[350px] text-white  gap-4 p-2 rounded-xl'  >
        <h1 className='font-bold'>Quiz Completed</h1>
        <p>Your Score: {score}/{questions.length}</p>
        <button className='w-[120px] bg-slate-700 rounded-2xl p-2 hover:bg-red-600 mb-2' onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const shuffle = [...currentQuestion.incorrect_answers];
  const correct_answer_index = Math.floor(Math.random() * 4);
  shuffle.splice(correct_answer_index, 0, currentQuestion.correct_answer);

  return (
    <div className=' w-[350px] h-[320px] bg-black text-white p-3 rounded-xl'>
      <h2 className='font-bold  text-xl h-[80px]'>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <ul className='cursor-pointer mt-3 flex flex-col items-center gap-2'>
        {shuffle.map((ans) => (
          <li className='px-2 bg-gray-600  w-[260px] rounded-xl hover:bg-lime-800' key={ans} onClick={() => handleAnswerClick(ans)}>
            {ans}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;