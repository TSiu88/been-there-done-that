import React from 'react';
import PropTypes from 'prop-types';

function Tag(props){
  return(
    <React.Fragment>
      <h5>Tagged?: {props.tagStatus} - {props.dateCreated.toDate().toString()}</h5>
      <h3>{props.nickName} - ({props.placeName})</h3>
      <h4>{props.address} | {props.coordinates}</h4>
      <p>{props.description}</p>
      <p>Note: {props.personalNote}</p>
      <button className="btn btn-secondary" onClick = {() => {props.onEditClick(props.id)}}>Edit</button>
      <button className="btn btn-secondary" onClick = {() => {props.onDeleteClick(props.id)}}>Delete</button>
    </React.Fragment>
  );
}

Tag.propTypes = {
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
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