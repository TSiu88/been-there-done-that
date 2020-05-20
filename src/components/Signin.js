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
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <label name='email'>Email:{`\t`}</label>
          <input
            type='text'
            name='signinEmail'
            placeholder='email' />
            <br />
          <label name='password'>Password:{`\t`}</label>
          <input
            type='password'
            name='signinPassword'
            placeholder='Password' />
            <br />
          <button type='submit'>Sign In</button>
        </form>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>You are already signed in!</h1>
        <Link to="/">Go to Map</Link>
        <br />
        <button onClick={doSignOut}>Sign out</button>
      </React.Fragment>
    );
  }
  
}

export default withFirestore(Signin);