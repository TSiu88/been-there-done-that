export default (state = {}, action) => {
  const { id, tagStatus, nickName, placeName, description, address, coordinates, personalNote, dateCreated} = action;
  switch (action.type){
    case 'ADD_OR_UPDATE_TAG':
      return Object.assign({}, state, {
        [id]: {
          id: id,
          tagStatus: tagStatus,
          nickName: nickName,
          placeName: placeName,
          description: description,
          address: address,
          coordinates: coordinates,
          personalNote: personalNote,
          dateCreated: dateCreated
        }
      });
    case 'DELETE_TAG':
      const newState = { ...state};
      delete newState[id];  
      return newState;
    default:
      return state;
  }
};