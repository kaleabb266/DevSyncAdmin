import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  function handleLogout() {
    sessionStorage.removeItem('userAuthToken'); 
    window.location.href = "/";
  }
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" /> */}
          </div>
          <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
            <Link to="/manage-group" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18M3 12h18m-18 4.5h18"></path>
              </svg>
              Group Management
            </Link>
            <Link to="/programming-languages" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
              <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18M3 12h18m-18 4.5h18"></path>
              </svg>
              Manage Quiz
            </Link>
            <Link to="/Reported-Users" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
            <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5h18M3 12h18m-18 4.5h18"></path>
              </svg>
              Manage User
            </Link>
            <button onClick={handleLogout} className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4z" />
            </svg>
  Logout
</button>
            
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
