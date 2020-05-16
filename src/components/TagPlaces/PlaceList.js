import React from 'react';
import Place from './Place';
import PropTypes from 'prop-types';

const places = [{}];

function PlaceList(){
  return(
    <React.Fragment>
      <hr />
      {places.map((place) => {
        return <Place 
          whenTaggingClick={place.onTaggingClick}
          placeName={place.placeName}
          address={place.address}
          id={place.id}
          key={place.id}
        />
      })}
    </React.Fragment>
  );
}

PlaceList.propTypes = {
  onTaggingClick: PropTypes.func
}

export default PlaceList;