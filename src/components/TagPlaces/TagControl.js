import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
import NewTagForm from './NewTagForm';
import PlaceDetail from './PlaceDetails';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

class TagControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTagFormVisible: false,
      tagListVisible: false,
      mapSearchVisible: true,
      selectedPlace: null,
      placeToAdd: null,
      selectedTag: null,
      masterTagList: [
        {
          id: v4(),
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
          id: v4(),
          tagStatus: true,
          nickName: "nick two",
          placeName: "place2 name",
          description: "tester2 place desc",
          address: "456 Street",
          coordinates: "xxx,yyy",
          personalNote: "testing2 testing2",
          dateCreated: Date.now()
        }
      ],
      masterPlaceList: [
        {
          id: 0,
          placeName: "place0",
          address: "000 Street",
          coordinates: "xxx,yyy"
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

  handleToggleAddTagForm = () => {
    this.setState(prevState => ({
      addTagFormVisible: !prevState.addTagFormVisible
    }));
  }

  handleAddingNewTag = (newTag) => {
    const newMasterTagList = this.state.masterTagList.concat(newTag);
    this.setState({
      masterTagList: newMasterTagList,
      addTagFormVisible: false
    });
  }

  handleChangingSelectedPlace = (id) => {
    const selectedPlace = this.state.masterPlaceList.filter(place => place.id === id)[0];
    this.setState({selectedPlace: selectedPlace});
  }

  setVisibility = () => {
    if(this.state.tagListVisible){
      return <TagList tagList={this.state.masterTagList}/>;
    } else if (this.state.selectedPlace != null){
      return <PlaceDetail place = {this.state.selectedPlace} />
    } else if (this.state.addTagFormVisible){
      return <NewTagForm onNewTagCreation = {this.handleAddingNewTag} />
    } else {
      return <MapSearch 
        placesList={this.state.masterPlaceList}
        placeToAdd={this.handleAddingNewTag}
        showPlaceDetails={this.handleChangingSelectedPlace}
      />;
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
  tagListVisible: PropTypes.bool,
  addTagFormVisible: PropTypes.bool
};

export default TagControl;