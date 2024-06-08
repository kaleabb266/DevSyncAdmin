import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

const ReportedUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchReportedUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/report');
        console.log("dddddddddddddddddddddddddddddddddddddddddddddddd")
        // console.log(response.data[0])
        setUsers(response.data);
        console.log(users)
        
        
      } catch (error) {
        setError(error.message); // Set error state
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
              <th className="px-4 py-2">Group</th>
              <th className="px-4 py-2">Date</th>
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

const ReportedUser = ({ reporeduser, reportedby, description,group,date, _id }) => {

  const [forceRender, setForceRender] = useState(false);

  const handleRemove = async (Id) => {
    console.log(Id); 
  
    try {
      const response = await axios.delete(`http://localhost:3001/api/report/${Id}`);
      if (response.status === 200) {
        alert("Report removed successfully!");
        setForceRender(!forceRender)
      } else {
        console.error('Unexpected response status:', response.status, response.data);
        alert("An error occurred during removing. Please try again."); 
      }
    } catch (error) {
      console.error('Error removing report:', error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="px-4 py-2">{reporeduser}</td>
      <td className="px-4 py-2">{reportedby}</td>
      <td className="px-4 py-2 truncate">{description}</td>
      <td className="px-4 py-2 truncate">{group}</td>
      <td className="px-4 py-2 truncate">{date}</td>
      <td className="px-4 py-2">
      <button  class="px-4 py-2 bg-red-500 text-white font-bold rounded shadow-sm hover:bg-red-700 mr-5 " >Ban</button>
      <button class="px-4 py-2 bg-green-500 text-white font-bold rounded shadow-sm hover:bg-red-700 ml-5" onClick={() => handleRemove(_id)} >Remove</button>

        
      </td>
    </tr>
  );
};

export default ReportedUsers;
