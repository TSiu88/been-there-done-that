import React from "react";
import firebase from "firebase/app";
import { withFirestore } from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

function Register(){  

  let history = useHistory();

  function doSignUp(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      let user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: username
      });
      console.log("successfully signed up!");
      history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  return (
    <React.Fragment>
      <h2>Register</h2>
      <form className="authForm" onSubmit={doSignUp}>
        <label name='username'>Username:{`\t`}</label>
        <input
          type='text'
          name='username'
          placeholder='username' />
        <br />
        <br />
        <label name='email'>Email:{`\t`}</label>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <br />
        <br />
        <label name='password'>Password:{`\t`}</label>
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <br />
        <br />
        <button className="btn btn-primary" type='submit'>Register</button>
      </form>
    </React.Fragment>
  );
}

export default withFirestore(Register);