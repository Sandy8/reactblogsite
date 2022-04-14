import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Topbar />
          <Home />
        </Route>
        <Route path="/login">
          <Topbar />
          <Login />
        </Route>
        <Route path="/register">
          <Topbar />
          <Register />
        </Route>
      </Router>
    </div>
  );
}

export default App;
