import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
import NewTagForm from './NewTagForm';
import EditTagForm from './EditTagForm';
import PlaceDetail from './PlaceDetails';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import { connect } from 'react-redux';

class TagControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addTagFormVisible: false,
      editTagFormVisible: false,
      tagListVisible: false,
      mapSearchVisible: true,
      selectedPlace: null,
      placeToAdd: null,
      selectedTag: null,
      // masterTagList: [
      //   {
      //     id: v4(),
      //     tagStatus: true,
      //     nickName: "nick one",
      //     placeName: "place name",
      //     description: "tester place desc",
      //     address: "123 Street",
      //     coordinates: "xxx,yyy",
      //     personalNote: "testing testing",
      //     dateCreated: Date.now()
      //   },
      //   {
      //     id: v4(),
      //     tagStatus: true,
      //     nickName: "nick two",
      //     placeName: "place2 name",
      //     description: "tester2 place desc",
      //     address: "456 Street",
      //     coordinates: "xxx,yyy",
      //     personalNote: "testing2 testing2",
      //     dateCreated: Date.now()
      //   }
      // ],
      // masterPlaceList: [
      //   {
      //     id: 0,
      //     placeName: "place0",
      //     address: "000 Street",
      //     coordinates: "xxx,yyy"
      //   }
      // ]
    };
  }

  handleToggleListMap = () => {
    this.setState(prevState => ({
      tagListVisible: !prevState.tagListVisible,
      mapSearchVisible: !prevState.mapSearchVisible
    }));
  }

  handleToggleAddTagForm = (id) => {
    const placeToAdd = this.state.masterPlaceList.filter(place => place.id === id)[0];
    this.setState(prevState => ({
      addTagFormVisible: !prevState.addTagFormVisible,
      placeToAdd: placeToAdd
    }));
  }

  handleAddingNewTag = (placeToAdd) => {
    const { dispatch } = this.props;
    const { id, tagStatus, nickName, placeName, description, address, coordinates, personalNote, dateCreated} = placeToAdd;
    const action = {
      type: 'ADD_OR_UPDATE_TAG',
      id: id,
      tagStatus: tagStatus,
      nickName: nickName,
      placeName: placeName,
      description: description,
      address: address,
      coordinates: coordinates,
      personalNote: personalNote,
      dateCreated: dateCreated
    };
    dispatch(action);
    this.setState({
      addTagFormVisible: false,
      placeToAdd: null
    });
  }

  handleChangingSelectedPlace = (id) => {
    const selectedPlace = this.state.masterPlaceList.filter(place => place.id === id)[0];
    this.setState({selectedPlace: selectedPlace});
  }

  handleChangingSelectedTag = (id) => {
    const selectedTag = this.props.masterTagList[id];
    this.setState({selectedTag: selectedTag});
  }

  handleDeletingTag = (id) => {
    const { dispatch } = this.props;
    const action = { 
      type: 'DELETE_TAG',
      id: id
    }
    this.setState({
      selectedTag: null
    })
  }

  handleEditClick = () => {
    this.setState({editTagFormVisible: true});
  }

  handleEditingTag = (editedTag) => {
    const { dispatch } = this.props;
    const { id, tagStatus, nickName, placeName, description, address, coordinates, personalNote, dateCreated} = editedTag;
    const action = {
      type: 'ADD_OR_UPDATE_TAG',
      id: id,
      tagStatus: tagStatus,
      nickName: nickName,
      placeName: placeName,
      description: description,
      address: address,
      coordinates: coordinates,
      personalNote: personalNote,
      dateCreated: dateCreated
    };
    dispatch(action);
    this.setState({
      selectedTag: null,
      editTagFormVisible: false
    });
  }

  setVisibility = () => {
    if(this.state.tagListVisible){
      return <TagList 
      tagList={this.props.masterTagList}
      onDeleteClick={this.handleDeletingTag}
      onEditClick={this.handleEditClick}
    />;
    } else if (this.state.selectedPlace != null){
      return <PlaceDetail place = {this.state.selectedPlace} />
    } else if (this.state.addTagFormVisible){
      return <NewTagForm onNewTagCreation = {this.handleAddingNewTag} />
    } else if (this.state.editTagFormVisible){
      return <EditTagForm tag = { this.state.selectedTag} onEditTag = {this.handleEditingTag} />
    } else if (this.state.selectedTag != null){
      return <TagList 
        tagList={this.props.masterTagList}
        onEditClick={this.handleEditingTag}
        onDeleteClick={this.handleDeletingTag}
      />
    } else {
      return <MapSearch 
        placesList={this.props.masterPlaceList}
        placeToAdd={this.handleToggleAddTagForm}
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
  addTagFormVisible: PropTypes.bool,
  masterTagList: PropTypes.object,
  masterPlaceList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTagList: state,
    masterPlaceList: state
  }
}

TagControl = connect(mapStateToProps)(TagControl);

export default TagControl;