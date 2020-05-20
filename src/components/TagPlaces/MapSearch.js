import React from 'react';
import PlaceList from './PlaceList';
import PropTypes from 'prop-types';

function MapSearch(props){
  return (
    <React.Fragment>
      {/* <PlaceList 
        onTaggingClick={props.placeToAdd}
        onDetailsClick={props.showPlaceDetails}
        places = {props.placesList}
      /> */}
      {/* Map from API here */}
      <div className="mapSidebar">
        <h2 className="mapHeading">Map Search</h2>
        <div id="geocoder" className="geocoder"></div>
        <div id="listings" className="listings"></div>
      </div>
      <div id='map' className='map pad2'>Map</div>
    </React.Fragment>
  );
}

MapSearch.propTypes = {
  placeToAdd: PropTypes.func,
  showPlaceDetails: PropTypes.func,
  // placesList: PropTypes.object
}

export default MapSearch;