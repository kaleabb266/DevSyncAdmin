import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
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
import Login from './components/main/Login (2)';
// Import other components if you have them

const MainApp = () => {
  
  const [user, setUser] = useState({}); 

  useEffect(() => {
console.log("user is ",user)
    
  }, [user]);

  
  if (user.username) {

    return <Router>
      <Routes>
        <Route path="/" element={<Login onAuth={(user) => setUser(user)} />} />
        {/* <Route path="/signup" element={<Sign_Up />} /> */}

      </Routes>
    </Router>

  }
  else {return (
    <Router>
      
        <div className="flex flex-col min-h-screen">
          
          <div className="flex flex-1">
            <Sidebar />
            {/* <Route path="/manage-quiz" element={<ManageQuiz />} /> */}
            <main className="flex-1 flex p-4 lg:ml-64">
              <div className="w-full p-4">
                <Routes>
                  <Route path="/manage-quiz" element={<ManageQuiz />} />
                  <Route path="/manage-group" element={<ChannelManagement />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/Reported-Users" element={<ReportedUsers />} />
                  <Route path="/Reported-Users/:id" element={<ReportedUserDetails />} />
                  <Route path="/programming-languages" element={<ProgrammingLanguages />} />
                  <Route path="/programming-languages/:language" element={<QuizQuestions />} />
                  <Route path="/programming-languages/:language/new" element={<ManageQuiz />} />
                  {/* Add other protected routes here */}
                </Routes>
              </div>
            </main>
          </div>
        </div>
      
     
    </Router>
  );}
};

export default MainApp;
