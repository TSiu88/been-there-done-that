import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
import NewTagForm from './NewTagForm';
import PropTypes from 'prop-types';

class TagControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTagFormVisible: false,
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
      ],
      masterPlaceList: [
        {
          
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
    } else if (this.state.addTagFormVisible){
      return <NewTagForm onNewTagCreation = {this.handleAddingNewTag} />
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
  tagListVisible: PropTypes.bool,
  addTagFormVisible: PropTypes.bool
};

export default TagControl;