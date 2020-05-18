import React from 'react';
import PropTypes from 'prop-types';

function Place(props){
  return(
    <React.Fragment>
      <button className="btn btn-secondary" onClick = {() => {props.whenTaggingClick(props.id)}}>Add Tag</button>
      <h3>{props.placeName}</h3>
      <h4>{props.address}</h4>
    </React.Fragment>
  );
}

Place.propTypes = {
  whenTaggingClick: PropTypes.func,
  placeName: PropTypes.string,
  address: PropTypes.string
}

export default Place;