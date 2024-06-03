import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import for routing

const ReportedUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchReportedUsers = async () => {
      try {
        const response = await fetch('/api/reported-users');
        console.log('Response:', response); // Log the response
        if (!response.ok) {
          throw new Error('Failed to fetch reported users');
        }
        
        const data = await response.json();
        console.log('Data:', data); // Log the data
        setUsers(data); // Correctly set the users state with the data
      } catch (error) {
        setError(error.message); 
        console.error('Error fetching reported users:', error);
      }
    };

    fetchReportedUsers(); // Call fetch function on component mount
  }, []);

  return (
    <div className="container mx-auto px-4 py-2">
      <h1 className="text-2xl font-bold mb-4">Reported Users</h1>
      {error ? (
        <p className="text-red-500">{error}</p> // Display error message
      ) : (
        <table className="w-full border border-gray-200 shadow rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-medium">
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Reported By</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <ReportedUser key={user.id} {...user} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const ReportedUser = ({ username, reportedBy, description, id }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="px-4 py-2">{username}</td>
      <td className="px-4 py-2">{reportedBy}</td>
      <td className="px-4 py-2 truncate">{description}</td>
      <td className="px-4 py-2">
        <Link to={`/reported-users/${id}`} className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-2 py-1 rounded">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default ReportedUsers;
