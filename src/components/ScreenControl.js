import React from 'react';
import SplashPage from './SplashPage';
import TagControl from './TagPlaces/TagControl';
import { isLoaded } from 'react-redux-firebase';
import firebase from "firebase/app";

function ScreenControl(){

  let currentlyVisibleComponent;
  const auth = firebase.auth();

  const setVisibility = () => {
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      currentlyVisibleComponent = <SplashPage />;
    } else if ((isLoaded(auth)) && (auth.currentUser != null)) {
      currentlyVisibleComponent = <TagControl />;
    }
  }

  setVisibility();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    );
  } else {
    return(
      <React.Fragment>
        {currentlyVisibleComponent}
      </React.Fragment>
    );
  }
}

export default ScreenControl;