import React from 'react';

import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img src="images/2807534.jpg" alt="" className="sidebarImg" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt suscipit neque a venenatis. In non molestie magna. Proin ut tellus tortor. Nunc dignissim euismod ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
            </div>
            <span className="sidebarTitle">
                    CATEGORIES
                </span>
            <div className="sidebarItem">
                <ul className="sidebarList">
                    <li className="sidebarlistItem">
                        Life
                    </li>
                    <li className="sidebarlistItem">
                        Music
                    </li>
                    <li className="sidebarlistItem">
                        Style
                    </li>
                    <li className="sidebarlistItem">
                        Sport
                    </li>
                    <li className="sidebarlistItem">
                        Tech
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
                </span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon
                 fa-brands fa-instagram"></i>
                    <i className="sidebarIcon
                 fa-brands fa-twitter"></i>
                    <i className="sidebarIcon
                 fa-brands fa-linkedin"></i>
                    <i className="sidebarIcon
                 fa-brands fa-github"></i>
                    <i className="sidebarIcon
                 fa-solid fa-laptop"></i>

                </div>
            </div>
        </div>
    )
}
