import React from 'react';
import Tag from './Tag';

const tags = [{}];

function TagList(){
  return(
    <React.Fragment>
      <hr />
      {tags.map((tag) => {
        return <Tag />
      })}
    </React.Fragment>
  );
}

export default TagList;