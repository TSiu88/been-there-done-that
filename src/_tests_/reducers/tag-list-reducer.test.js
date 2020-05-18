import tagListReducer from '../../reducers/tag-list-reducer';
import {v4} from 'uuid';

describe('tagListReducer', () => {

  let action;
  const firstId = v4();
  const tagData = {
    id: firstId,
    tagStatus: true,
    nickName: "nick one",
    placeName: "place name",
    description: "tester place desc",
    address: "123 Street",
    coordinates: "xxx,yyy",
    personalNote: "testing testing",
    dateCreated: Date.now()
  };
  test('Should return default state if no action type passed into reducer', () => {
    expect(tagListReducer({}, {type: null})).toEqual({});
  });

  test('Should add new tag to masterTagList', () => {
    const { id, tagStatus, nickName, placeName, description, address, coordinates, personalNote, dateCreated} = tagData;
    action = {
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
    };
    expect(tagListReducer({}, action)).toEqual({
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
    })
  });

});