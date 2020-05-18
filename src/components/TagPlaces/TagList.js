import React from 'react';
import Tag from './Tag';
import PropTypes from 'prop-types';

function TagList(props){
  return(
    <React.Fragment>
      <hr />
      <h2>TAG LIST</h2>
      {props.tagList.map((tag) => {
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
  onDeleteClick: PropTypes.func,
  tagList: PropTypes.array
}

export default TagList;