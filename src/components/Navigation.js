import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid py-2">
        <NavLink className="navbar-brand mx-auto fw-bold" to="/">Fake Mart</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/products">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>              
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
            </li>
          </ul>
          
          <button type="button" className="btn btn-outline-primary ms-2" onClick={() => navigate('/register')}>
              <FontAwesomeIcon icon={faUserPlus} /> Register
          </button>
          <button type="button" className="btn btn-outline-primary ms-2" onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} /> Login
          </button>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1"></span> Cart ({5})
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
