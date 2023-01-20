import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-brand">
          <a href="#">My Site</a>
          <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <a href="#" className="navbar-item">Home</a>
            <a href="#" className="navbar-item">About</a>
            <a href="#" className="navbar-item">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;