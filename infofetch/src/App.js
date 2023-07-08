import React, { useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Users from './Users';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = () => {
    setCurrentPage('users');
  };

  return (
    <div>
      <Navbar handleClick={handleNavClick} />
      <div className="content-container">
        {currentPage === 'home' ? <Home /> : <Users />}
      </div>
    </div>
  );
};

export default App;
