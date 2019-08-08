import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from './components/SignUp';


class App extends Component {

  render(){

    return  (<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </Router>
  );
  }
}

export default App;
