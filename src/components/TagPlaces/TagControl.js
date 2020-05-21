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
let geocoder;
let query;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
var MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
class TagControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tagListVisible: false,
      mapSearchVisible: true,
      selectedPlace: null,
      placeToAdd: null,
      selectedTag: null,
      searchResults: [],
      isLoaded: false,
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

    // Add geocoder
    geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      });
       
      document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
  // }

  // componentDidUpdate() {
    geocoder.on('result', function(data) { // When the geocoder returns a result
      let point = data.result.center; // Capture the result coordinates

      //Add Tilequery API call variable setting here
      const tileset = 'mapbox.mapbox-streets-v8'; // replace this with the ID of the tileset
      const radius = 1609; // 1609 meters is roughly equal to one mile
      const limit = 10; // The maximum amount of results to return

      // Create new variable for Tilequery API request
      query = 'https://api.mapbox.com/v4/' + tileset + '/tilequery/' + point[0] + ',' + point[1] + '.json?radius=' + radius + '&limit= ' + limit + '&dedupe&layers=poi_label&access_token=' + mapboxgl.accessToken;

      //this.makeApiSearchCall;

      //Make the Tilequery API call
      // makeApiSearchCall = () => {
      //   fetch(query).then(response => response.json())
      //   .then(
      //     (jsonifiedResponse) => {
      //       this.setState({
      //         isLoaded: true,
      //         searchResults: jsonifiedResponse.results
      //       });
      //     })
      //     .catch((error) => {
      //       this.setState({
      //         isLoaded: true,
      //         error
      //       });
      //     });
      // }
        console.log(data); // Shows results from search
  //       // Code from the next step will go here
  //       map.getSource('tilequery').setData(data);
  //     })

  //     marker.setLngLat(point).addTo(map); // Add the marker to the map at the result coordinates

  //   });

  //   // Add markers to found results of Tilequery API call
  //   map.addSource('tilequery', { // Add a new source to the map style: https://docs.mapbox.com/mapbox-gl-js/api/#map#addsource
  //     type: "geojson",
  //     data: {
  //       "type": "FeatureCollection",
  //       "features": []
  //     }
    });
  }

  makeApiSearchCall = () => {
    fetch(query).then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        this.setState({
          isLoaded: true,
          searchResults: jsonifiedResponse.results
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
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
        searchResults={this.makeApiSearchCall}
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