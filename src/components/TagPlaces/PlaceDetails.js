import React from 'react';
import PropTypes from 'prop-types';

function PlaceDetails(props){
  const { place } = props;
  return (
    <React.Fragment>
      <h2>PLACE DETAILS</h2>
      <h3>{place.placeName} ({place.coordinates}</h3>
      <h4>{place.address}</h4>
    </React.Fragment>
  );
}

PlaceDetails.propTypes = {
  place: PropTypes.object
};

export default PlaceDetails;