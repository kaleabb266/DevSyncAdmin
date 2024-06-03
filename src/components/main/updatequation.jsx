import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom'; // Import for routing

const UpdateQuiz = () => {
  const [formData, setFormData] = useState({
    language: '',
    question: '',
    choices: ['', '', '', ''],
    correctAnswerIndex: -1,
  });

  const { quizId } = useParams(); // Get quiz ID from URL param
//   const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...formData.choices];
    updatedChoices[index] = value;
    setFormData({ ...formData, choices: updatedChoices });
  };

  const handleCorrectAnswerChange = (event) => {
    setFormData({ ...formData, correctAnswerIndex: parseInt(event.target.value) });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const filteredData = formData; // Send all form data

      const response = await axios.put(`http://localhost:3001/api/quiz/${quizId}`, filteredData); // Use PUT for update
      console.log('Quiz updated successfully:', response.data);
    //   history.push('/quizzes'); // Redirect to list of quizzes on success
    } catch (error) {
      console.error('Error updating quiz:', error);
    }
  };

  useEffect(() => {
    const fetchQuiz = async () => {
      if (quizId) { // Only fetch if quizId exists (for update)
        try {
          const response = await axios.get(`http://localhost:3001/api/quiz/${quizId._id}`);
          setFormData(response.data[0]);
          console.log("formData")
          console.log(formData)
          console.log("formData") // Set form data with fetched quiz details
        } catch (error) {
          console.error('Error fetching quiz:', error);
          // Handle error (e.g., redirect to error page)
        }
      }
    };

    fetchQuiz(); // Call fetchQuiz on component mount
  }, [quizId]); // Dependency array: refetch on quizId change
// const filteredQuestions = questions.filter((question) => question.language === selectedlanguage.language);


  return (
    <div className="manage-quiz-container p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Language
          </label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Question
          </label>
          <input
            type="text"
            name="question"
            value={formData.question}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Choices
          </label>
          <div>
            {formData.choices.map((choice, index) => (
              <div key={index} className="mb-2">
                <input
                  type="text"
                  name={`choice-${index + 1}`} // Individual names for each choice
                  value={choice}
                  onChange={(e) => handleChoiceChange(index, e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Correct Answer Index (0-3)
          </label>
          <input
            type="number"
            name="correctAnswerIndex"
            value={formData.correctAnswerIndex}
            onChange={handleCorrectAnswerChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min={0}
            max={3}
          />
        </div>
        <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Save Quiz
        </button>
      </form>
    </div>
  );
}

export default UpdateQuiz;