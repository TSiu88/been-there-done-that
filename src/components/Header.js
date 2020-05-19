import React from 'react';
import { Link } from "react-router-dom";

function Header() {
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
}

export default Header;