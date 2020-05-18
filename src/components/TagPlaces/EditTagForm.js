import React from 'react';
import ReusableForm from './ReusableForm';

function EditTagForm(props){

  const handleEditTagFormSubmission = (event) => {
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
        formSubmissionHandler={handleEditTagFormSubmission}
        formType="Edit Tag"
        // placeName={event.target.placeName.value}
        // coordinates={event.target.coordinates.value}
      />
    </React.Fragment>
  );
}
export default EditTagForm;