import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = ({ setUser }) => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        github: '',
        techStacks: { 
            type: Map, 
            of: Number 
          },
        averageRating: 0,
        ratingCount: 0,
        profilePicture: null
    });

    const [editField, setEditField] = useState('');
    const [fieldValue, setFieldValue] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/profile/search', {
                    params: {
                        username: 'Kaleab'
                    }
                });
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching the profile:', error);
            }
        };

        fetchProfile();
    }, []);

    const handleLogout = () => {
        setUser({});
        console.log('logout');
        navigate('/');
    };

    const handleEdit = (field) => {
        setEditField(field);
        setFieldValue(profile[field]);
    };

    const handleChange = (e) => {
        setFieldValue(e.target.value);
    };

    const handleSave = () => {
        setProfile({ ...profile, [editField]: fieldValue });
        setEditField('');
    };

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(URL.createObjectURL(file));
        setProfile({ ...profile, profilePicture: file });
    };

    const addTechStack = () => {
        const newLanguage = prompt('Enter the new technology/language:');
        if (newLanguage) {
            setProfile(prevProfile => ({
                ...prevProfile,
                techStacks: {
                    ...prevProfile.techStacks,
                    [newLanguage]: null,
                },
            }));
        }
    };

    return (
        <div className="grid gap-4 h-screen">
            <div className="card card-side bg-base-100 flex flex-row">
                <div className="avatar pt-3 top-1 pl-5">
                    {profile.profilePicture ? (
                        <img
                            src={profilePicture || URL.createObjectURL(profile.profilePicture)}
                            alt="Profile"
                            className="rounded-full w-24 h-24 object-contain"
                        />
                    ) : (
                        <div className="rounded-full w-24 h-24 bg-gray-300"></div>
                    )}
                </div>
                <div className="card-body flex flex-row pb-5">
                    <div className='pr-5'>
                        <h2 className="card-title">{profile.firstName} {profile.lastName}</h2>
                        <h1>Rating {profile.averageRating}/10</h1>
                    </div>
                    <div>
                        <div className="rating rating-lg"></div>
                    </div>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl h-full">
                <div className="p-5">
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M12 11.5V16.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12 7.51L12.01 7.49889" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className="card-body">
                    <div className="mb-4">
                        <h2 className='text-lg font-bold'>Profile Picture</h2>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePictureChange}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    {['firstName', 'lastName', 'email', 'username', 'github'].map((field) => (
                        <div key={field} className='mb-4'>
                            <h2 className='text-lg font-bold'>{field.charAt(0).toUpperCase() + field.slice(1)}</h2>
                            {editField === field ? (
                                <div>
                                    <input
                                        type="text"
                                        value={fieldValue}
                                        onChange={handleChange}
                                        className="input input-bordered w-full max-w-xs"
                                    />
                                    <button onClick={handleSave} className="ml-2 btn btn-success">Save</button>
                                </div>
                            ) : (
                                <div>
                                    <p>{profile[field]}</p>
                                    <button onClick={() => handleEdit(field)} className="text-blue-500 hover:text-blue-700">Edit</button>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="mb-4">
                        <h2 className='text-lg font-bold'>Field of Expertise</h2>
                        {Object.keys(profile.techStacks).map((language, index) => (
                            <div key={index} className='flex flex-row mb-2'>
                                <h1>{language}</h1>
                            </div>
                        ))}
                        <button onClick={addTechStack} className="text-blue-500 hover:text-blue-700">Add new tech stack</button>
                    </div>

                    <div>
                        <h2 className='text-lg font-bold'>Contact Info</h2>
                        <p>Github: github.com/{profile.github}</p>
                    </div>

                    <div>
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
