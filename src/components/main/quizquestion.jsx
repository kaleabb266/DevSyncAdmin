// QuizQuestions.js
import React, { useState, useEffect } from 'react';

const QuizQuestions = ({ languageId }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch the list of quiz questions for the selected language
    fetch(`/api/quiz-questions?languageId=${languageId}`)
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching quiz questions:', error));
  }, [languageId]);

  const addQuestion = () => {
    // Logic to add a new question
  };

  const deleteQuestion = (questionId) => {
    // Logic to delete a question
  };

  const updateQuestion = (questionId) => {
    // Logic to update a question
  };

  return (
    <div>
      <h2>Quiz Questions</h2>
      <button onClick={addQuestion}>Add Question</button>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            {question.text}
            <button onClick={() => updateQuestion(question.id)}>Update</button>
            <button onClick={() => deleteQuestion(question.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestions;
