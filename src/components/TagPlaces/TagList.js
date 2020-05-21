import React from 'react';
import Tag from './Tag';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function TagList(props){
  const { onEditClick, onDeleteClick } = props;
  useFirestoreConnect([
    { collection: 'tags', orderBy: ["dateCreated", "desc"] }
  ]);
  const tags = useSelector(state => state.firestore.ordered.tags);
  if (isLoaded(tags) && !isEmpty(tags)) {
    return(
      <React.Fragment>
        <hr />
        <h2>TAG LIST</h2>
        {tags.map((tag) => {
          console.log("TAG", tag);
          return <Tag
            tagStatus={tag.tagStatus}
            dateCreated={tag.dateCreated}
            nickName={tag.nickName}
            placeName={tag.placeName}
            address={tag.address}
            coordinates={tag.coordinates}
            description={tag.description}
            personalNote={tag.personalNote}
            whenEditClicked={onEditClick}
            whenDeleteClicked={onDeleteClick}
            id={tag.id}
            key={tag.id}
            />
        })}
      </React.Fragment>
    );
  } else if (isLoaded(tags) && isEmpty(tags)){
    return(
      <React.Fragment>
        <h3>No Tags Added!</h3>
      </React.Fragment>
    );
  } else {
    return(
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    );
  }
}

TagList.propTypes = {
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
}

export default TagList;