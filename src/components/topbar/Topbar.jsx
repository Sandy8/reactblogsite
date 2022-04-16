import React from 'react';
import { Link } from 'react-router-dom';

import './topbar.css';

export default function Topbar() {
  const user = false;
  return (
    <div className='topbar'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-instagram"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-github"></i>
      <i className="topIcon fa-solid fa-laptop"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toplistItem">
            <Link to="/" className="link"> HOME
            </Link>
          </li>
          <li className="toplistItem">
          <Link to="/" className="link"> ABOUT
            </Link>
            </li>
          <li className="toplistItem">
          <Link to="/" className="link"> CONTACT
            </Link>
            </li>
          <li className="toplistItem">
          <Link to="/write" className="link"> WRITE
            </Link>
            </li>
          <li className="toplistItem">
            {user && "LOGOUT" }
            </li>
        </ul>
      </div>
      <div className="topRight">
        { user ? (
            <img className="topImage" src="images/2807534.jpg" alt="" />
        ) : (
          <ul className="topList">
          <li className="toplistItem">
            <Link to="/login" className="link" >
              LOGIN
              </Link>
              </li>
              <li className="toplistItem">
          <Link className="link" to="/register" >
            REGISTER
            </Link>
            </li>
        </ul>
        )}
        <i className="topIcon topsearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
