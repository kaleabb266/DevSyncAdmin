// ProgrammingLanguages.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgrammingLanguages = ({ onSelectLanguage }) => {
  const [questionsD, setquestionsD] = useState([]);
  const languagesall = questionsD.map(item => item.language);
  const languages = [...new Set(languagesall)];





useEffect(() => {
  const fetchQuestions = async () => {
    

    try {
      const response = await axios.get('http://localhost:3001/api/quiz');
      setquestionsD(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("yesss");
    }
  };

  fetchQuestions();
}, []);

  const handleLanguageClick = (language) => {

    window.location.href = `${window.location.origin}${window.location.pathname}/${language}`;
  };
  const handleAddQuestion = () => {
    window.location.href = "http://localhost:5173/manage-quiz/"; 
  }

  return (
    <div className="flex flex-col   gap-4">
      <div class=" text-center font-bold py-4 rounded-b-lg">
        <h2>Tech Stacks</h2>
     </div>
      {languages.map((language, index) => (
        <button
          key={index}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-500 focus:ring-opacity-50 text-left"
          onClick={() => handleLanguageClick(language)}
        >
          {language}
        </button>
      ))}
      <button onClick={handleAddQuestion} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">Add Question</button>
    </div>
  );
};

export default ProgrammingLanguages;
