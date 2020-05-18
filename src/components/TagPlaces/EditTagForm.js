import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditTagForm(props){
  const {tag} = props;

  const handleEditTagFormSubmission = (event) => {
    event.preventDefault();
    const newTag = {
      nickName: event.target.nickName.value,
      personalNote: event.target.personalNote.value,
      id: tag.id
    }
    props.onEditTag(newTag);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTagFormSubmission}
        formType="Edit Tag"
        // placeName={event.target.placeName.value}
        // coordinates={event.target.coordinates.value}
      />
    </React.Fragment>
  );
}

EditTagForm.propTypes = {
  onEditTag: PropTypes.func
}

export default EditTagForm;