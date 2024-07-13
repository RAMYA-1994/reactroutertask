import React, { useState } from 'react';
// import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/"><h1>GUVI COURSES</h1></a>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <ul>
          <li><a href="/">All</a></li>
          <li><a href="/Fullstackdevelopment">Fullstackdevelopment</a></li>
          <li><a href="/datascience">Datascience</a></li>
          <li><a href="/secure">Cyber</a></li>
          <li><a href="/us">Career</a></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon"></span>
      </div>
    </nav>
  );
};

export default Navbar