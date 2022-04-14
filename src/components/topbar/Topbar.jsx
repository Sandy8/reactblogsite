import React from 'react';

import './topbar.css';

export default function Topbar() {
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
          <li className="toplistItem">HOME</li>
          <li className="toplistItem">ABOUT</li>
          <li className="toplistItem">CONTACT</li>
          <li className="toplistItem">WRITE</li>
          <li className="toplistItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage" src="images/2807534.jpg" alt="" />
        <i className="topIcon topsearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
