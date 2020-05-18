import React from 'react';
import PlaceList from './PlaceList';
import PropTypes from 'prop-types';

function MapSearch(props){
  return (
    <React.Fragment>
      <h2>MAP SEARCH</h2>
      <PlaceList 
        onTaggingClick={props.placeToAdd}
        onDetailsClick={props.showPlaceDetails}
        places = {props.placesList}
      />
      {/* Map from API here */}
    </React.Fragment>
  );
}

MapSearch.propTypes = {
  placeToAdd: PropTypes.func,
  showPlaceDetails: PropTypes.func,
  placesList: PropTypes.array
}

export default MapSearch;