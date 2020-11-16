import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
// import private route

//components
import Home from "./components/Home";
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/authenticated/DashBoard'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Food Truck Tracker</div>
        <div className="nav">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </header>
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/dashboard' component={DashBoard} />
        </Switch>
      </>
    </div>
  );
}

export default App;
