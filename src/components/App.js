import React from 'react';
import './App.css';
import Header from "./Header";
import ScreenControl from './ScreenControl';
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
           <ScreenControl />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
