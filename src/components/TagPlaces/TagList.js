import React from 'react';
import Tag from './Tag';
import PropTypes from 'prop-types';

const masterTags = [{}];

function TagList(props){
  return(
    <React.Fragment>
      <hr />
      {masterTags.map((tag) => {
        return <Tag
          tagStatus={tag.tagStatus}
          dateCreated={tag.dateCreated}
          nickName={tag.nickName}
          placeName={tag.placeName}
          address={tag.address}
          coordinates={tag.coordinates}
          description={tag.description}
          personalNote={tag.personalNote}
          whenEditClicked={props.onEditClick}
          whenDeleteClicked={props.onDeleteClick}
          id={tag.id}
          key={tag.id}
          />
      })}
    </React.Fragment>
  );
}

TagList.propTypes = {
  onEditClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

export default TagList;