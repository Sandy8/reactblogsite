import React from 'react';

import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">
            Register
        </span>
      <form className="registerForm">
      <label htmlFor="">
              Username
          </label>
            <input type="text" placeholder="Enter your username" name="" id="" />
            
          <label htmlFor="">
              Email
          </label>
            <input type="text" placeholder="Enter your email" name="" id="" />
            <label htmlFor="">
              Password
          </label>
            <input type="password" placeholder="Enter your password" name="" id="" />
            <button className="registerButton">
                register
            </button>

      </form>
      <button className="registerloginButton">
                Login
            </button>
    </div>
  )
}
