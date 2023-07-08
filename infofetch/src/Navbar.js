import React from 'react';
import './App.css';

const Navbar = ({ handleClick }) => {
  return (
    <nav className="navbar">
      <h1>DaVincci</h1>
      <ul>
        <li onClick={handleClick}>Users</li>
      </ul>
    </nav>
  );
};

export default Navbar;