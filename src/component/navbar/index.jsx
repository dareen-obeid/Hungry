import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-items">
        <span className="h">
          <Link to="/">
            <h3>
            Hangry
            </h3>
          </Link>
        </span>
        &nbsp;
        &nbsp;
        <span className="about">
          <Link to="/about">
            <h3>
            About
            </h3>
          </Link>
        </span>

      </div>
    </div>
  );
};

export default NavBar;
