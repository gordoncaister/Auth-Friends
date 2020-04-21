import React from 'react';

import './App.css';
import Login from "./components/Login"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        <Switch>
          <Route path="/login" component={Login}/>

          
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
