import React from 'react';
import TagList from './TagList';
import MapSearch from './MapSearch';
import NewTagForm from './NewTagForm';
import EditTagForm from './EditTagForm';
import PlaceDetail from './PlaceDetails';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import mapboxgl from 'mapbox-gl';

let buttonText = "My Tagged Places";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
class TagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tagListVisible: false,
      mapSearchVisible: true,
      selectedPlace: null,
      placeToAdd: null,
      selectedTag: null,
      lng: -122,
      lat: 47.5,
      zoom: 7
    };
  }

  // Initialize map with component did mount to render after element containing map created
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: "map", //map container reference where to render map
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    // Store new lat, long, and zoom from interactions with map so it's interactable
    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  handleToggleListMap = () => {
    if (this.state.mapSearchVisible){
      this.setState({
        mapSearchVisible: false,
        tagListVisible: true
      });
      buttonText="Map Search";
    } else {
      this.setState({
        mapSearchVisible: true,
        tagListVisible: false
      });
      buttonText="My Tagged Places";
    }
  }

  handleToggleAddTagForm = () => {
    if (this.state.selectedTag != null){
      this.setState({
        selectedTag: null,
        editTagFormVisible: false,
        addTagFormVisible: false,
        mapSearchVisible: true
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewTag = () => {
    const { dispatch } = this.props;
    const action = a.toggleAddForm();
    dispatch(action);
  }

  // handleChangingSelectedPlace = (id) => {
  //   const selectedPlace = this.state.masterPlaceList.filter(place => place.id === id)[0];
  //   this.setState({selectedPlace: selectedPlace});
  // }

  handleChangingSelectedTag = (id) => {
    this.props.firestore.get({collection: 'tags', doc: id}).then((tag) => {
      const firestoreTag = {
        id: tag.id,
        userId: tag.get("userId"),
        tagStatus: tag.get("tagStatus"),
        nickName: tag.get("nickName"),
        placeName: tag.get("placeName"),
        description: tag.get("description"),
        address: tag.get("address"),
        coordinates: tag.get("coordinates"),
        personalNote: tag.get("personalNote"),
        dateCreated: tag.get("dateCreated")
      }
      this.setState({selectedTag: firestoreTag });
    });
  }

  handleDeletingTag = (id) => {
    this.props.firestore.delete({collection: 'tags', doc: id});
    this.setState({selectedTag: null});
  }

  handleEditClick = () => {
    this.setState({editTagFormVisible: true});
  }

  handleEditingTag = () => {
    this.setState({
      selectedTag: null,
      editTagFormVisible: false
    });
  }

  setVisibility = () => {
    if(this.state.tagListVisible){
      return <TagList 
      onDeleteClick={this.handleDeletingTag}
      onEditClick={this.handleEditClick}
    />;
    } else if (this.state.selectedPlace != null){
      return <PlaceDetail place = {this.state.selectedPlace} />
    } else if (this.props.addTagFormVisible){
      return <NewTagForm onNewTagCreation = {this.handleAddingNewTag} />
    } else if (this.props.editTagFormVisible){
      return <EditTagForm tag = { this.state.selectedTag} onEditTag = {this.handleEditingTag} />
    } else if (this.state.selectedTag != null){
      return <TagList 
        onEditClick={this.handleEditingTag}
        onDeleteClick={this.handleDeletingTag}
      />
    } else {
      return <MapSearch 
        placeToAdd={this.handleToggleAddTagForm}
        showPlaceDetails={this.handleChangingSelectedPlace}
      />;
    }
  }

  render(){
    let currentlyVisibleComponent = this.setVisibility();
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    return(
      <React.Fragment>
        <div className="tagControlContainer">
          <button onClick={this.handleToggleListMap}>{buttonText}</button>
          {currentlyVisibleComponent}
        </div>
      </React.Fragment>
    );
  }
}

TagControl.propTypes = {
  tagListVisible: PropTypes.bool,
  addTagFormVisible: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    tagListVisible: state.tagListVisible,
    mapSearchVisible: state.mapSearchVisible,
    addTagFormVisible: state.addTagFormVisible,
    editTagFormVisible: state.editTagFormVisible
  }
}

TagControl = connect(mapStateToProps)(TagControl);

export default withFirestore(TagControl);