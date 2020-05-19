export const deleteTag = id => ({
  type: 'DELETE_TAG',
  id: id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addOrUpdateTag = (tag) => {
  const { id, tagStatus, nickName, placeName, description, address, coordinates, personalNote, dateCreated} =  tag;
  return {
    type: 'ADD_OR_UPDATE_TAG',
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
}