import tagListReducer from '../../reducers/tag-list-reducer';
import {v4} from 'uuid';

describe('tagListReducer', () => {

  let action;
  const firstId = v4();
  const secondId = v4();
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
  const currentState = {
    [firstId]: {
      id: firstId,
      tagStatus: true,
      nickName: "nick one",
      placeName: "place name",
      description: "tester place desc",
      address: "123 Street",
      coordinates: "xxx,yyy",
      personalNote: "testing testing",
    },
    [secondId]: {
      id: secondId,
      tagStatus: true,
      nickName: "nick two",
      placeName: "place2 name",
      description: "tester place2 desc",
      address: "456 Street",
      coordinates: "xxx,yyy",
      personalNote: "testing2 testing2",
    },
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

  test('Should delete a tag', () => {
    action = {
      type: 'DELETE_TAG',
      id: firstId
    };
    expect(tagListReducer(currentState, action)).toEqual({
      [secondId]: {
        id: secondId,
        tagStatus: true,
        nickName: "nick two",
        placeName: "place2 name",
        description: "tester place2 desc",
        address: "456 Street",
        coordinates: "xxx,yyy",
        personalNote: "testing2 testing2",
      }
    });
  });

});