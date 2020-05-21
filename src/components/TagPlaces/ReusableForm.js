import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function ReusableForm(props){
  return (
    <React.Fragment>
      <div>
        <form onSubmit={props.formSubmissionHandler}>
          <h2>{props.formType}</h2>
          <div>
            <h4>{props.place.properties.name} | {props.place.properties.address}</h4>
          </div>
          <div>
            <label name='nickName'>Nickname (optional): </label>
            <input 
            type='text'
            name='nickName'
            placeholder='nickname for place'
            />
            <br />
          </div>
          <div>
            <label name='personalNote'>Personal Note (optional): </label>
            <textarea 
            type='text'
            name='personalNote'
            placeholder='Note on place'
            />
            <br />
          </div>
          <button type='submit'>Submit</button>
        </form>
        <Link to="/">Cancel</Link>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  formType: PropTypes.string,
  placeName: PropTypes.string,
  coordinates: PropTypes.string
}

export default ReusableForm;