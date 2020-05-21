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
import { makeApiSearchCall } from './../../actions';

let places = {
  "type": "FeatureCollection",
  "features": [
    {
      "id": 0,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.3492345, 
          47.620425999999995 
        ]
      },
      "properties": {
        "name": "Space Needle",
        "type": "monument, landmark, historic",
        "address": "400 Broad St",
        "city": "Seattle",
        "country": "United States",
        "postalCode": "98109",
        "state": "WA"
      }
    },
    {
      "id": 1,
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4289919435978,
          37.806283149631255
        ]
      },
      "properties": {
        "name": "Fort Mason",
        "type": "National Park",
        "address": "201 Fort Mason",
        "city": "San Francisco",
        "country": "United States",
        "postalCode": "94109",
        "state": "CA"
      }
    },
  ]
};

let buttonText = "My Tagged Places";
let geocoder;
let point;
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
      zoom: 7,
      places: places.features
    };
  }

  // Initialize map with component did mount to render after element containing map created
  componentDidMount() {
    const { dispatch } = this.props;

    // Add marker on result
    var marker = new mapboxgl.Marker({'color': '#008000'}); // Create a new green marker

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

    geocoder.on('result', function(data) { // When the geocoder returns a result
      point = data.result.center; // Capture the result coordinates
      marker.setLngLat(point).addTo(map); // Add the marker to the map at the result coordinates

      dispatch(makeApiSearchCall(data));
      console.log("DATA", data); // Shows results from search
      map.getSource('tilequery').setData(data); //ERROR: undefined
    });

    // Add markers to found results of Tilequery API call
    map.on('load', function() {
    
      map.addSource('tilequery', { // Add a new source to the map style: https://docs.mapbox.com/mapbox-gl-js/api/#map#addsource
        type: "geojson",
        data: {
          "type": "FeatureCollection",
          "features": []
        }
      });

      // Shows all store types as different colors on map
      map.addLayer({ // Add a new layer to the map style: https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
        id: "tilequery-points",
        type: "circle",
        source: "tilequery", // Set the layer source
        paint: {
          "circle-stroke-color": "white",
          "circle-stroke-width": { // Set the stroke width of each circle: https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-circle-circle-stroke-width
            stops: [
              [0, 0.1],
              [18, 3]
            ],
            base: 5
          },
          "circle-radius": { // Set the radius of each circle, as well as its size at each zoom level: https://docs.mapbox.com/mapbox-gl-js/style-spec/#paint-circle-circle-radius
            stops: [
              [12, 5],
              [22, 180]
            ],
            base: 5
          },
        }
      });
    });

   // Adds popups for each store to show name, type , address, distance from query point
    let popup = new mapboxgl.Popup; // Initialize a new popup

  map.on('mouseenter', point, function(e) {
     map.getCanvas().style.cursor = 'pointer'; // When the cursor enters a feature, set it to a pointer

     var title = '<h3>' + e.result.properties.text + '</h3>'; // Set the store name
     var storeAddress = '<p>' + e.result.properties.address + '</p>'; // Set the store address
    //  var obj = JSON.parse(e.features[0].properties.tilequery); // Get the feature's tilequery object (https://docs.mapbox.com/api/maps/#response-retrieve-features-from-vector-tiles)
    //  var distance = '<p>' + (obj.distance / 1609.344).toFixed(2) + ' mi. from location' + '</p>'; // Take the distance property, convert it to miles, and truncate it at 2 decimal places

     var lon = e.result.center[0];
     var lat = e.result.center[1];
     var coordinates = new mapboxgl.LngLat(lon, lat); // Create a new LngLat object (https://docs.mapbox.com/mapbox-gl-js/api/#lnglatlike)
     var content = title + storeAddress; // All the HTML elements

     popup.setLngLat(coordinates) // Set the popup at the given coordinates
       .setHTML(content) // Set the popup contents equal to the HTML elements you created
       .addTo(map); // Add the popup to the map
   })

   map.on('mouseleave', point, function() {
     map.getCanvas().style.cursor = ''; // Reset the cursor when it leaves the point
     popup.remove(); // Remove the popup when the cursor leaves the point
   });
  }

  handleToggleListMap = () => {
    if(this.state.addTagFormVisible){
      this.setState({
        mapSearchVisible: true,
        tagListVisible: false,
        addTagFormVisible: false,
      });
      buttonText="Map Search";
    } else if (this.state.mapSearchVisible){
      this.setState({
        mapSearchVisible: false,
        tagListVisible: true,
        addTagFormVisible: false,
      });
      buttonText="Map Search";
    } else {
      this.setState({
        mapSearchVisible: true,
        tagListVisible: false,
        addTagFormVisible: false,
      });
      buttonText="My Tagged Places";
    }
  }

  handleToggleAddTagForm = (id) => {
    if (this.state.selectedTag != null){
      this.setState({
        selectedTag: null,
        editTagFormVisible: false,
        addTagFormVisible: false,
        mapSearchVisible: true
      });
    } else {
      const selectedPlace = this.state.places.filter(place => place.id === id)[0];
      this.setState({
        placeToAdd: selectedPlace,
        addTagFormVisible: true,
        mapSearchVisible: false,
        tagListVisible: false
      });
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewTag = () => {
    this.setState({
      addTagFormVisible: false,
      mapSearchVisible: true,
      tagListVisible: false
    });
    const { dispatch } = this.props;
    const action = a.toggleAddForm();
    dispatch(action);
  }

  handleChangingSelectedPlace = (id) => {
    const selectedPlace = this.state.masterPlaceList.filter(place => place.id === id)[0];
    this.setState({selectedPlace: selectedPlace});
  }

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
      return <NewTagForm onNewTagCreation = {this.handleAddingNewTag} selectedPlace={this.state.placeToAdd}/>
    } else if (this.props.editTagFormVisible){
      return <EditTagForm tag = { this.state.selectedTag} onEditTag = {this.handleEditingTag} />
    // } else if (this.state.selectedTag != null){
    //   return <TagList 
    //     onEditClick={this.handleEditingTag}
    //     onDeleteClick={this.handleDeletingTag}
    //   />
    } else {
      return <MapSearch 
        places={this.state.places}
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