import React from 'react';
import PropTypes from 'prop-types';

function Tag(props){
  return(
    <React.Fragment>
      <h5>Tagged?: {props.tagStatus.toString()} - {props.dateCreated.toString()}</h5>
      <h3>{props.nickName} - ({props.placeName})</h3>
      <h4>{props.address} | {props.coordinates}</h4>
      <p>{props.description}</p>
      <p>Note: {props.personalNote}</p>
      <button className="btn btn-secondary" onClick = {() => {props.whenEditClick(props.id)}}>Edit</button>
      <button className="btn btn-secondary" onClick = {() => {props.whenDeleteClick(props.id)}}>Delete</button>
    </React.Fragment>
  );
}

Tag.propTypes = {
  whenEditClick: PropTypes.func,
  whenDeleteClick: PropTypes.func,
  tagStatus: PropTypes.bool,
  dateCreated: PropTypes.object,
  nickName: PropTypes.string,
  placeName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  coordinates: PropTypes.string.isRequired,
  description: PropTypes.string,
  personalNote: PropTypes.string
}

export default Tag;