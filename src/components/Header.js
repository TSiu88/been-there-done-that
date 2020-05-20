import React from 'react';
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { isLoaded } from 'react-redux-firebase';

function Header() {

  const auth = firebase.auth();

  if(isLoaded(auth) && auth.currentUser == null){
    return(
      <React.Fragment>
        <h1>Been There, Done That</h1>
        <div>
          <h4>
          <Link to="/">Home</Link>
          {`\t`}|{`\t`}
          <Link to="/signin">Sign In</Link>
          {`\t`}|{`\t`}
          <Link to="/register">Register</Link>
          </h4>
        </div>
      </React.Fragment>
    );
  } else {
    return(
      <React.Fragment>
        <h1>Been There, Done That</h1>
        <div>
          <h4>
          <Link to="/">Home</Link>
          {`\t`}|{`\t`}
          <Link to="/signin">Sign Out</Link>
          </h4>
        </div>
      </React.Fragment>
    );
  }
  
}

export default Header;