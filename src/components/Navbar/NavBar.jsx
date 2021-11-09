import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/Logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/wild-heroes/" className="logo-content">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <div className="title">
          <h1>WILD HEROES</h1>
        </div>
        <div className="header-content-link">
          <NavLink
            activeClassName="text-nav-active"
            className="text-nav"
            to="/wild-heroes/quiz"
          >
            Quiz
          </NavLink>
          <NavLink
            activeClassName="text-nav-active"
            className="text-nav"
            to="/wild-heroes/informations"
          >
            Informations
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;