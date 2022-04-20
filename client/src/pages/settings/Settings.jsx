import React from 'react';

import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrap">
          <div className="settingsTitle">
              <span className="settingsupdateTitle">
                  Update your account
              </span>
              <span className="settingsdeleteTitle">
                  Delete your account
              </span>
          </div>
          <form className="settingsForm">
            <label htmlFor="">
                Profile Picture
            </label>
            <div className="settingspp">
                <img src="images/2807534.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingsppIcon fa-solid fa-user">
                </i>
                </label>
                <input type="file" name="fileInput" id="fileInput" />
            </div>
            <label htmlFor="">
                Username
            </label>
            <input type="text" placeholder="Sandhya" name="" id="" />
            <label htmlFor="">
                Email
            </label>
            <input type="email" placeholder="radhgap@gmail.com" name="" id="" />
            <label htmlFor="">
                Password
            </label>
            <input type="password" placeholder="" name="" id="" />
          <button className="settingsSubmit">
              Update
          </button>
          </form>
      </div>
      <Sidebar />
    </div>
  )
}
