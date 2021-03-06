import React from 'react';
import { Link } from 'react-router-dom';

import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">
            Login
        </span>
      <form className="loginForm">
          <label htmlFor="">
              Email
          </label>
            <input type="text" placeholder="Enter your email" name="" id="" />
            <label htmlFor="">
              Password
          </label>
            <input type="password" placeholder="Enter your password" name="" id="" />
            <button className="loginButton">
                Login
            </button>

      </form>
      <button className="loginregisterButton">
                <Link to='/register' className='link' >
                  Register</Link>
            </button>
    </div>
  )
}
