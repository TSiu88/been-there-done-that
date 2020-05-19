import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function EditTagForm(props){
  const firestore = useFirestore();
  const {tag} = props;

  const handleEditTagFormSubmission = (event) => {
    event.preventDefault();
    props.onEditTag();
    const updatedTag = {
      nickName: event.target.nickName.value,
      personalNote: event.target.personalNote.value
    }
    return firestore.update({collection: 'tags', doc: tag.id}, updatedTag);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTagFormSubmission}
        formType="Edit Tag"
      />
    </React.Fragment>
  );
}

EditTagForm.propTypes = {
  onEditTag: PropTypes.func
}

export default EditTagForm;