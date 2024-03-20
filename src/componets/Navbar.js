// src/Navbar.js

import { useState} from 'react';
import { Link } from 'react-router-dom';
import './styling/Navbar.css';
import logoImage from './assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="/">
          <img src={logoImage} alt="Logo" height="30" />
          Caleb
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link> {/* Link to the Services page */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contacts">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
