import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/main/Header';
import Sidebar from './components/main/Sidebar';
import ManageQuiz from './components/main/ManageQuiz';
import ChannelManagement from './components/main/channel';
import ReportedUsersPage from './components/main/Reportusers';
import ProgrammingLanguages from './components/main/programminglanguages';
// Import other components if you have them
// import ManageQuestions from './ManageQuestions';
// import UserManagement from './UserManagement';

const MainApp = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 flex p-4 lg:ml-64">
            <div className="w-full p-4">
              <Routes>
                <Route path="/manage-quiz" element={<ManageQuiz />} />
                <Route path="/channel-management" element={<ChannelManagement />} />
                <Route path="/user-management" element={<ReportedUsersPage />} />
                <Route path="/programming-languages" element={<ProgrammingLanguages />} />
                {/* Add other routes here */}
                {/* <Route path="/manage-questions" element={<ManageQuestions />} />
                <Route path="/user-management" element={<UserManagement />} /> */}
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default MainApp;
