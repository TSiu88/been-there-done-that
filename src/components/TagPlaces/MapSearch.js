import React from 'react';
import PlaceList from './PlaceList';

function MapSearch(props){
  return (
    <React.Fragment>
      <h2>MAP SEARCH</h2>
      <PlaceList />
      {/* Map from API here */}
    </React.Fragment>
  );
}

export default MapSearch;