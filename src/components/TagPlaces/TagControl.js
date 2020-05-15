import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
import NewTagForm from './NewTagForm';

class TagControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  setVisibility = () => {
    if(TagListVisible){
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
        {currentlyVisibleComponent}
      </React.Fragment>
    );
  }
}

export default TagControl;