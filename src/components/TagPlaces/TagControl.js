import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
import NewTagForm from './NewTagForm';
import PropTypes from 'prop-types';

class TagControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagListVisible: false,
      mapSearchVisible: true,
      selectedPlace: null,
      selectedTag: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      tagListVisible: !prevState.tagListVisible,
      mapSearchVisible: !prevState.mapSearchVisible
    }));
  }

  handleAddingNewTag = (newTag) => {
    
  }

  handleChangingSelectedPlace = (id) => {

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

TagControl.propTypes = {
  tagListVisible: PropTypes.bool
};

export default TagControl;