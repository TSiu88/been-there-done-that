import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, tagStatus, nickName, placeName, description, address, coordinates, personalNote, dateCreated} = action;
  switch (action.type){
    case c.DELETE_TAG:
      const newState = { ...state};
      delete newState[id];  
      return newState;
    default:
      return state;
  }
};