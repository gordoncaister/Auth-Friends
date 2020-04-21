import React from 'react';

import './App.css';
import Login from "./components/Login"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );


  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends">Friends</Link>
        </nav>
        <Switch>
          <Route path="/login" component={Login}/>

          
        </Switch>
      
      </div>
    </Router>
    
  );
}

export default App;
