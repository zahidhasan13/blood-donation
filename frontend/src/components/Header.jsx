import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Blood Donation</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="#donate" className="nav-link">Donate Blood</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;