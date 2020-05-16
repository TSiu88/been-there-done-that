import React from 'react';
import PropTypes from 'prop-types';

function NewTagForm(props){

  const handleNewTagFormSubmission = (event) => {
    event.preventDefault();
    const newTag = {
      nickName: event.target.nickName.value,
      personalNote: event.target.personalNote.value,
    }
    props.onFormSubmit(newTag);
  }

  return (
    <React.Fragment>
      <h2>NEW TAG FORM</h2>
      <div>
        <form onFormSubmit={handleNewTagFormSubmission}>
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
      </div>
    </React.Fragment>
  );
}

NewTagForm.propTypes = {
  onFormSubmit: PropTypes.func
}

export default NewTagForm;