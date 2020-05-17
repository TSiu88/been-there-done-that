import React from 'react';
import SplashPage from './SplashPage';
import TagControl from './TagPlaces/TagControl';
//import PropTypes from 'prop-types';

function ScreenControl(props){

  let splashPageVisible;
  let currentlyVisibleComponent;

  const setVisibility = () => {
    if(splashPageVisible){
      currentlyVisibleComponent = <SplashPage />;
    } else {
      currentlyVisibleComponent = <TagControl />;
    }
  }
  setVisibility();

  return(
    <React.Fragment>
      {currentlyVisibleComponent}
    </React.Fragment>
  );
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