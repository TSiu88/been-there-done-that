import React from 'react';
import Place from './Place';
import PropTypes from 'prop-types';

function PlaceList(props){
  return(
    <React.Fragment>
      <hr />
      {props.places.map((place) => {
        return <Place 
          whenTaggingClick={place.onTaggingClick}
          whenClickPlace={place.onDetailsClick}
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
  onTaggingClick: PropTypes.func,
  onDetailsClick: PropTypes.func,
  places: PropTypes.array 
}

export default PlaceList;