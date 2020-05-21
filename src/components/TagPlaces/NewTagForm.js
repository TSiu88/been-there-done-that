import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase'
import firebase from "firebase/app";
import { withFirestore } from 'react-redux-firebase';

function NewTagForm(props){

  const firestore = useFirestore();

  function addTagToFirestore(event){
    event.preventDefault();
    props.onNewTagCreation();

    let coordinateObj = {
      0:props.selectedPlace.geometry.coordinates[0], 
      1:props.selectedPlace.geometry.coordinates[1]
    };
    
    firestore.collection('tags').add(
      {
        userId: firebase.auth().currentUser.uid,
        tagStatus: true,
        nickName: event.target.nickName.value,
        placeName: props.selectedPlace.properties.name,
        description: props.selectedPlace.properties.type,
        address: props.selectedPlace.properties.address,
        coordinates: coordinateObj,
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
        place={props.selectedPlace}
      />
    </React.Fragment>
  );
}

NewTagForm.propTypes = {
  onNewTagCreation: PropTypes.func
}

export default withFirestore(NewTagForm);