import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/main/Header';
import Sidebar from './components/main/Sidebar';
import ManageQuiz from './components/main/ManageQuiz';
import ChannelManagement from './components/main/channel';
import ReportedUsersPage from './components/main/Reportusers';
import ReportedUsers from './components/main/reporteduser';
import ProgrammingLanguages from './components/main/programminglanguages';
import QuizQuestions from './components/main/quizquestion';
import ReportedUserDetails from './components/main/reportedUserDetails';
import Profile from './components/main/profile';
// Import other components if you have them
// import ManageQuiz from './components/main/ManageQuiz';
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
                <Route path="/manage-group" element={<ChannelManagement />} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/Reported-Users" element={<ReportedUsers />} />
                <Route path="/Reported-Users/:id" element={<ReportedUserDetails />} />
                <Route path="/programming-languages" element={<ProgrammingLanguages />} />
                <Route path="/programming-languages/:language" element={<QuizQuestions />} />
                <Route path="/programming-languages/:language/new" element={<ManageQuiz />} />
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
