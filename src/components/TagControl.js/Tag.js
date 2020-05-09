import React from 'react';
import PropTypes from 'prop-types';

function Tag(props){
  return(
    <React.Fragment>
      <h5>Status: {props.tagStatus} - {props.dateCreated.toDate().toString()}</h5>
      <h3>{props.placeName} - ({props.nickName})</h3>
      <h4>{props.address}</h4>
      <p>{props.description}</p>
      <p>Note: {props.personalNote}</p>
      <button className="btn btn-secondary" onClick = {() => {props.onEditClick(props.id)}}>Edit</button>
      <button className="btn btn-secondary" onClick = {() => {props.onDeleteClick(props.id)}}>Delete</button>
    </React.Fragment>
  );
}

Tag.propTypes = {
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default Tag;