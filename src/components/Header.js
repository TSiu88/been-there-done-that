import React from 'react';
import { Link } from "react-router-dom";
import { withFirestore } from 'react-redux-firebase';

function Header(props) {
  const {userName} = props;

  let userNameVisible;
  let signInOutVisible;
  let registerVisible;

  const setVisibility = () => {
    if(props.userSignInStatus){
      userNameVisible = <span>{userName}{`\t`}|{`\t`}</span>;
      signInOutVisible = <Link to="/signin">Sign Out</Link>;
      registerVisible = <span></span>;
    } else {
      userNameVisible = <span></span>;
      signInOutVisible = <Link to="/signin">Sign In</Link>;
      registerVisible = <span>{`\t`}|{`\t`}
        <Link to="/register">Register</Link></span>;
    }
  }

  setVisibility();
  
  return (
    <React.Fragment>
      <div className="headerBar">
        <div className="authNavBar">
          <p><strong>
            {userNameVisible}
            {signInOutVisible}
            {registerVisible}
          </strong></p>
        </div>
        <div className="titleHeader">
          <h1><Link to="/">Been There, Done That</Link></h1>
        </div>
      </div>
    </React.Fragment>
  )
}
export default withFirestore(Header);