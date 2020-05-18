import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
//import NewTagForm from './NewTagForm';
import PropTypes from 'prop-types';

class TagControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagListVisible: false,
      mapSearchVisible: true,
      selectedPlace: null,
      selectedTag: null,
      masterTagList: [
        {
          id: 1,
          tagStatus: true,
          nickName: "nick one",
          placeName: "place name",
          description: "tester place desc",
          address: "123 Street",
          coordinates: "xxx,yyy",
          personalNote: "testing testing",
          dateCreated: Date.now()
        },
        {
          id: 2,
          tagStatus: true,
          nickName: "nick two",
          placeName: "place2 name",
          description: "tester2 place desc",
          address: "456 Street",
          coordinates: "xxx,yyy",
          personalNote: "testing2 testing2",
          dateCreated: Date.now()
        }
      ]
    };
  }

  handleToggleListMap = () => {
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
    if(this.state.tagListVisible){
      return <TagList tagList={this.state.masterTagList}/>;
    } else {
      return <MapSearch />;
    }
  }

  render(){
    let currentlyVisibleComponent = this.setVisibility();
    return(
      <React.Fragment>
        <h2>TAG CONTROL</h2>
        <button onClick={this.handleToggleListMap}>Toggle</button>
        {currentlyVisibleComponent}
      </React.Fragment>
    );
  }
}

TagControl.propTypes = {
  tagListVisible: PropTypes.bool
};

export default TagControl;