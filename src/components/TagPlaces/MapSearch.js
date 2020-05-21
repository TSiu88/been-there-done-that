import React from 'react';
import PlaceList from './PlaceList';
import PropTypes from 'prop-types';

function MapSearch(props){
  return (
    <React.Fragment>
      <div className="mapSidebar">
        <h2 className="mapHeading">Map Search</h2>
        <div id="geocoder" className="geocoder"></div>
        {/* <div id="listings" className="listings"></div> */}
        <div id="listings" className="listings">
          <PlaceList 
            places={props.places} 
            onDetailsClick={props.showPlaceDetails}
            onTaggingClick={props.placeToAdd}
          /></div>
      </div>
      <div id='map' className='map pad2'>Map</div>
    </React.Fragment>
  );
}

MapSearch.propTypes = {
  placeToAdd: PropTypes.func,
  showPlaceDetails: PropTypes.func,
  places: PropTypes.array
}

export default MapSearch;