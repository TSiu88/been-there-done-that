import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import ScreenControl from './ScreenControl';
import Signin from "./Signin";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withFirestore } from 'react-redux-firebase';
import firebase from 'firebase';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userName, setUserName] = useState("New User");

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserName(user.displayName);
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });

  return (
    <React.Fragment>
      <Router>
        <Header userSignInStatus={isSignedIn} userName={userName}/>
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
           <ScreenControl />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default withFirestore(App);
