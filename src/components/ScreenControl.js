import React from 'react';
import SplashPage from './SplashPage';
import TagControl from './TagPlaces/TagControl';

class ScreenControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      splashPageVisible: true,
      tagControlVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      splashPageVisible: !prevState.splashPageVisible,
      tagControlVisible: !prevState.tagControlVisible
    }));
  }

  setVisibility = () => {
    if(splashPageVisible){
      currentlyVisibleComponent = <SplashPage />;
    } else {
      currentlyVisibleComponent = <TagControl />;
    }
  }

  render(){
    let currentlyVisibleComponent = this.setVisibility();
    return(
      <React.Fragment>
        <h2>SCREEN CONTROL</h2>
        <h4><span onClick={this.handleClick}>Toggle</span></h4>
        {currentlyVisibleComponent}
      </React.Fragment>
    );
  }
}

export default ScreenControl;