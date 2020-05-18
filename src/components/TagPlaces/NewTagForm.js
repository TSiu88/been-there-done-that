import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewTagForm(props){

  const handleNewTagFormSubmission = (event) => {
    event.preventDefault();
    const newTag = {
      nickName: event.target.nickName.value,
      personalNote: event.target.personalNote.value,
    }
    props.onNewTagCreation(newTag);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTagFormSubmission}
        formType="Add New Tag"
        // placeName={event.target.placeName.value}
        // coordinates={event.target.coordinates}
      />
    </React.Fragment>
  );
}

NewTagForm.propTypes = {
  onNewTagCreation: PropTypes.func
}

export default NewTagForm;