import React from 'react';
import SplashPage from './SplashPage';
import TagControl from './TagPlaces/TagControl';
import { isLoaded } from 'react-redux-firebase';
import firebase from "firebase/app";

function ScreenControl(props){

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

// class ScreenControl extends React.Component {
  
//   constructor(props){
//     super(props);
//     this.state = {
//       splashPageVisible: true,
//       tagControlVisible: false,
//       currentlyVisibleScreenComponent: false
//     };
//   }

//   handleClick = () => {
//     this.setState(prevState => ({
//       splashPageVisible: !prevState.splashPageVisible,
//       tagControlVisible: !prevState.tagControlVisible
//     }));
//   }

//   setVisibility = () => {
//     if(this.state.splashPageVisible){
//       currentlyVisibleScreenComponent = <SplashPage />;
//     } else {
//       currentlyVisibleScreenComponent = <TagControl />;
//     }
//   }

//   render(){
//     let currentlyVisibleComponent = this.setVisibility;
//     return(
//       <React.Fragment>
//         <h2>SCREEN CONTROL</h2>
//         <h4><span onClick={this.handleClick}>Toggle</span></h4>
//         {currentlyVisibleComponent}
//       </React.Fragment>
//     );
//   }
// }

// ScreenControl.propTypes = {
//   splashPageVisible: PropTypes.bool
// }

// export default ScreenControl;