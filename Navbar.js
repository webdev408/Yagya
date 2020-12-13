import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-info">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">7-Eleven</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link" aria-current="page" to="/"><i className='fas fa-home'>Home</i></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/staff"><i className='fas fa-user alt'>Staff</i></NavLink>
                   </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/product"><i className="fas fa-hotdog">Product</i></NavLink>
                    </li>
                   <li className="nav-item">
                   <NavLink className="nav-link" to="/contact"><i className="fas fa-envelope">Contact</i></NavLink>
                    </li>
                   <li className="nav-item">
                   <NavLink className="nav-link" to="/useform"><i className="fas fa-envelope">UseForm</i></NavLink>
                    </li>
                  </ul>
               </div>
              </div>
            </nav>
         </div>
      )
    }

export default Navbar;
