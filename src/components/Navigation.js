// Navigation component or any other component
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* Add links to other pages as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
