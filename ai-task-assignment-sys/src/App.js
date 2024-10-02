import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskCreation from './components/TaskCreation';
import TeamMemberDashboard from './components/TeamMemberDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/task-creation" component={TaskCreation} />
        <Route path="/team-member-dashboard" component={TeamMemberDashboard} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;