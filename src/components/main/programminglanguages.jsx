// ProgrammingLanguages.js
import React, { useState, useEffect } from 'react';

const ProgrammingLanguages = ({ onSelectLanguage }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    // Fetch the list of programming languages from the backend
    fetch('/api/programming-languages')
      .then(response => response.json())
      .then(data => setLanguages(data))
      .catch(error => console.error('Error fetching programming languages:', error));
  }, []);

  return (
    <div>
      <h2>Programming Languages</h2>
      <ul>
        {languages.map(language => (
          <li key={language.id} onClick={() => onSelectLanguage(language.id)}>
            {language.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammingLanguages;
