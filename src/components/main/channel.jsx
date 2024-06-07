import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ChannelManagement = () => {
    const [channels, setChannels] = useState([]); 
    const [users, setUsers] = useState([]);
    const [newChannelName, setNewChannelName] = useState()

    useEffect(() => {
        // Fetch existing channels and users
        fetchChannels();
        fetchUsers();
    }, []);

    const fetchChannels = async () => {
        try {
            const response = await axios.get('/api/channels');
            if (Array.isArray(response.data)) {
                setChannels(response.data);
            } else {
                console.error('Unexpected response format:', response.data);
                setChannels([]); // Set channels to empty array if response is not an array
            }
        } catch (error) {
            console.error('Error fetching channels:', error);
            setChannels([]); // Set channels to empty array on error
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            if (Array.isArray(response.data)) {
                setUsers(response.data);
            } else {
                console.error('Unexpected response format:', response.data);
                setUsers([]); // Set users to empty array if response is not an array
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setUsers([]); // Set users to empty array on error
        }
    };

    const handleCreateChannel = async () => {
        if (newChannelName.trim() === '') return;

        try {
            const response = await axios.post('http://localhost:3001/api/group', { title: newChannelName ,is_direct_chat: false });
            {console.log("newChannelName")}
            {console.log(newChannelName)}
            // setChannels([...channels, response.data]);
            setNewChannelName('');
        } catch (error) {
            console.error('Error creating channel:', error);
        }
    };

    const handleAssignUsersToChannel = async (channelId, language) => {
        const eligibleUsers = users.filter(user => user.languages.includes(language) && user.hasTakenQuiz);
        try {
            await axios.post(`/api/channels/${channelId}/assign-users`, { users: eligibleUsers });
        } catch (error) {
            console.error('Error assigning users to channel:', error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create Group</h2>
            <div className="mb-4">
                <input 
                    type="text" 
                    value={newChannelName} 
                    onChange={(e) => setNewChannelName(e.target.value)} 
                    placeholder="Channel Name" 
                    className="border p-2 rounded w-full"
                />
            </div>
            {console.log(newChannelName)}
           
            <button 
                onClick={handleCreateChannel} 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Create Group
            </button>
            
        </div>
    );
};

export default ChannelManagement;
