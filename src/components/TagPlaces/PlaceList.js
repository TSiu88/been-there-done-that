import React from 'react';
import Place from './Place';
import PropTypes from 'prop-types';

function PlaceList(props){
  const { onTaggingClick, onDetailsClick } = props;
  return(
    <React.Fragment>
      <hr />
      {Object.values(props.places).map((place) => {
        return <Place 
          whenTaggingClick={onTaggingClick}
          whenClickPlace={onDetailsClick}
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
  places: PropTypes.object
}

export default PlaceList;