import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams for accessing route parameters


const ReportedUserDetails = () => {
  const { id } = useParams(); // Extract user ID from route parameter
  console.log(id)
  const [reportedUser, setReportedUser] = useState(null);
  const [reportedChats, setReportedChats] = useState([]);

  // Fetch user details and reported chats based on ID (replace with your API call logic)
  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await axios.get(`http://localhost:3001/api/reportedUser`);
      console.log(response.data)
      const data = response.data
      const filteredUser = data.filter((user) => user._id === id);
      console.log(filteredUser)

      
      setReportedUser(filteredUser[0]);
      setReportedChats(filteredUser[0].chat);
    };

    fetchUserDetails();
  }, [id]);

  // ... display user details and reported chats (logic based on your data structure)

  return (
    <div className="container mx-auto px-4 py-2">
      {reportedUser ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Reported User Details</h1>
          <div className="flex items-center mb-4">
            <h2 className="text-xl mr-2">{reportedUser.username}</h2>
            <span className="text-gray-500 text-sm">({console.log(reportedUser.username)})</span>
          </div>
          <h2>Reported Chats</h2>
          <ul className="list-disc pl-4 mt-4">
            {reportedUser.reportedChats?.map((chat) => (
              <li key={chat.id} className="mb-4">
                {/* Display chat content */}
                <p className="text-gray-700">{chat.content}</p>
                {/* Display timestamp */}
                <p className="text-gray-500 text-sm">Reported at: {new Date(chat.reportedAt).toLocaleString()}</p>
                {/* Display reason for report (if available) */}
                {chat.reason && (
                  <p className="text-red-500 text-sm">Reason for report: {chat.reason}</p>
                )}
              </li>
            ))}
          </ul>
          <h2>Actions</h2>
          <div className="flex space-x-2 mt-4">
            {/* Button for warning the user */}
            <button className="btn btn-primary">Warn User</button>
            {/* Button for suspending the user */}
            <button className="btn btn-danger">Suspend User</button>
            {/* Button for other actions (optional) */}
            {/* <button className="btn">Other Action</button> */}
          </div>
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
  
  
};

export default ReportedUserDetails;
