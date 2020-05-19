import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase'
import { auth } from 'firebase';

function NewTagForm(props){

  const firestore = useFirestore();

  function addTagToFirestore(event){
    event.preventDefault();
    props.onNewTagCreation();

    return firestore.collection('tags').add(
      {
        userId: auth.currentUser.uid,
        tagStatus: true,
        nickName: event.target.nickName.value,
        placeName: "place name",
        description: "tester place desc",
        address: "123 Street",
        coordinates: "xxx,yyy",
        personalNote: event.target.personalNote.value,
        dateCreated: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addTagToFirestore}
        formType="Add New Tag"
      />
    </React.Fragment>
  );
}

NewTagForm.propTypes = {
  onNewTagCreation: PropTypes.func
}

export default NewTagForm;