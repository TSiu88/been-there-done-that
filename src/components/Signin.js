import React from "react";
import firebase from "firebase/app";
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Link, useHistory } from 'react-router-dom';

function Signin(){  

  const auth = firebase.auth();
  let history = useHistory();

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      history.push('/signin');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  if((isLoaded(auth)) && (auth.currentUser == null)){
    return (
      <React.Fragment>
        <h2>Sign In</h2>
        <form className="authForm" onSubmit={doSignIn}>
          <label name='email'>Email:{`\t`}</label>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' />
            <br />
            <br />
          <label name='password'>Password:{`\t`}</label>
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' />
            <br />
            <br />
          <button className="btn btn-primary" type='submit'>Sign In</button>
        </form>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="authForm">
          <h3>You are signed in as {auth.currentUser.displayName} ({auth.currentUser.uid}).  Sign out?</h3>
          <button className="btn btn-primary" onClick={doSignOut}>Sign out</button>
          <br />
          <Link to="/">Return to Map</Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withFirestore(Signin);