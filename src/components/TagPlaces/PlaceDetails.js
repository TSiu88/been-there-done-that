import React from 'react';
import PropTypes from 'prop-types';

function PlaceDetails(props){
  const { place } = props;
  console.log(place)
  return (
    <React.Fragment>
      <h2>PLACE DETAILS</h2>
      <h3>{place.properties.name} ({place.geometry.coordinates[0]}, {place.geometry.coordinates[1]})</h3>
      <h4>{place.properties.address}, {place.properties.city}, {place.properties.state} {place.properties.postalCode}, {place.properties.country}</h4>
      <h4>{place.properties.type}</h4>
    </React.Fragment>
  );
}

PlaceDetails.propTypes = {
  place: PropTypes.object
};

export default PlaceDetails;