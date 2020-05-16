import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
import NewTagForm from './NewTagForm';

class TagControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagListVisible: false,
      mapSearchVisible: true
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      tagListVisible: !prevState.tagListVisible,
      mapSearchVisible: !prevState.mapSearchVisible
    }));
  }

  setVisibility = () => {
    if(tagListVisible){
      currentlyVisibleComponent = <TagList />
    } else {
      currentlyVisibleComponent = <MapSearch />
    }
  }

  render(){
    let currentlyVisibleComponent = this.setVisibility();
    return(
      <React.Fragment>
        <h2>TAG CONTROL</h2>
        <h4><span onClick={this.handleClick}>Tag List</span></h4>
        {currentlyVisibleComponent}
      </React.Fragment>
    );
  }
}

export default TagControl;