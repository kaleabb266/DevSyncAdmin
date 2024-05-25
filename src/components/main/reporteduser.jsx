// ReportedUsers.js
import React, { useState, useEffect } from 'react';

const ReportedUsers = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the list of reported users from the backend
    fetch('/api/reported-users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching reported users:', error));
  }, []);

  return (
    <div>
      <h2>Reported Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => onSelectUser(user.id)}>
            <p>{user.name}</p>
            <p>{user.shortDescription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportedUsers;
