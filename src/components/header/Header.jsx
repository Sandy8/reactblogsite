import React from 'react';

import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
         <span className="headertitleSm">
            React & Node
         </span>
         <span className="headertitleLg">
            Blog
         </span>
        <img src="images/3965545.jpg" alt="" className="headerImg" />
      </div>
    </div>
  )
}
