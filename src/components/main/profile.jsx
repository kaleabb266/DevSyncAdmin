import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const username = "dagiyou";
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/users');
                setUser(response.data.find((u) => u.username === username));
            } catch (err) {
                console.log("Error fetching data:", err);
            }
        };

        fetchUser();
    }, [username]);

    return (
        <div className="grid gap-4 h-screen bg-gradient-to-r">
            <div className="navbar bg-base-100 p-7 max-h-40">
                <div className="flex-1">
                    <a className="text-xl">User Info</a>
                </div>
                <div className="flex-none">
                    <button className="pr-3 btn-ghost">
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                            <path d="M18.1182 14.702L14 15.5C11.2183 14.1038 9.5 12.5 8.5 10L9.26995 5.8699L7.81452 2L4.0636 2C2.93605 2 2.04814 2.93178 2.21654 4.04668C2.63695 6.83 3.87653 11.8765 7.5 15.5C11.3052 19.3052 16.7857 20.9564 19.802 21.6127C20.9668 21.8662 22 20.9575 22 19.7655L22 16.1812L18.1182 14.702Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="m-1 btn-ghost">
                            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M3 5H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M3 12H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M3 19H21" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className='flex flex-row gap-4'>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M22 10L8 10C0 10 0 21 8 21M22 10L15 3M22 10L15 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <p>share this contact</p>
                                </button>
                            </li>
                            <li>
                                <button className='flex flex-row gap-4'>
                                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M20.8 8.1C20.8 8.59706 20.3971 9 19.9 9C19.4029 9 19 8.59706 19 8.1C19 7.60294 19.4029 7.2 19.9 7.2C20.3971 7.2 20.8 7.60294 20.8 8.1Z" fill="#000000"></path>
                                        <path d="M20.8 8.1C20.8 8.59706 20.3971 9 19.9 9C19.4029 9 19 8.59706 19 8.1C19 7.60294 19.4029 7.2 19.9 7.2C20.3971 7.2 20.8 7.60294 20.8 8.1ZM20.8 8.1V3.6C20.8 3.26863 21.0686 3 21.4 3H23" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path>
                                        <path d="M16 17C14.8954 17 14 16.1046 14 15C14 13.8954 14.8954 13 16 13C17.1046 13 18 13.8954 18 15C18 16.1046 17.1046 17 16 17Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M21.9506 13C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.4222 2 14.7751 2.2969 16 2.83209" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9Z" fill="#000000" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                    <p>edit contact</p>
                                </button>
                            </li>
                            <li>
                                <button className='flex flex-row gap-4'>
                                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                        <path d="M8.99219 13H11.9922H14.9922" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.03919 4.2939C3.01449 4.10866 3.0791 3.92338 3.23133 3.81499C3.9272 3.31953 6.3142 2 12 2C17.6858 2 20.0728 3.31952 20.7687 3.81499C20.9209 3.92338 20.9855 4.10866 20.9608 4.2939L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939Z" stroke="#000000" strokeWidth="1.5"></path>
                                        <path d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5" stroke="#000000" strokeWidth="1.5"></path>
                                    </svg>
                                    <p>delete contact</p>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
                    </form>
                </div>
            </div>

            <div className="card bg-base-100 p-6 shadow-xl">
                <div className="flex flex-row items-center">
                    <div className="avatar">
                        <img src={user.profilePicture} alt="Profile" className="rounded-full w-24 h-24" />
                    </div>
                    <div className="ml-6">
                        <h2 className="card-title">{user.firstname} {user.lastname}</h2>
                        <p className="text-gray-500">@{user.username}</p>
                        <p className="text-gray-500">{user.location}</p>
                        <div className="rating mt-2">
                            <span>Rating: {user.rating}/10</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 p-6 shadow-xl mt-6">
                <div className="card-body">
                    <h2 className="card-title">Skills</h2>
                    <ul className="list-disc pl-5">
                        {user.skills && user.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="card bg-base-100 p-6 shadow-xl mt-6">
                <div className="card-body">
                    <h2 className="card-title">Projects</h2>
                    {user.projects && user.projects.map((project, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-lg font-bold">{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card bg-base-100 p-6 shadow-xl mt-6">
                <div className="card-body">
                    <h2 className="card-title">GitHub</h2>
                    <a href={user.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">{user.github}</a>
                </div>
            </div>
        </div>
    );
}

export default Profile;
