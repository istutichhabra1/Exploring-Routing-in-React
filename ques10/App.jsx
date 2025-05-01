import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './UsersPage';
import UserDetailsPage from './UserDetailsPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/users/:userId" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
