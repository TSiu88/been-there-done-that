import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tagListReducer from '../../reducers/tag-list-reducer';
import { v4 } from 'uuid';

let store = createStore(rootReducer);

describe("rootReducer", () => {

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

  test('Should return default state if no action type', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTagList: {},
      addTagFormVisible: false,
      editTagFormVisible: false
    });
  });

  test('Check that initial state of tagListReducer matches root reducer', () => {
    expect(store.getState().masterTagList).toEqual(tagListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer with no state', () => {
    expect(store.getState().addTagFormVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer with no state', () => {
    expect(store.getState().editTagFormVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of ticketListReducer matches root reducer with action', () => {
    const action = {
      type: 'ADD_OR_UPDATE_TAG',
      id: firstId,
      tagStatus: true,
      nickName: "nick one",
      placeName: "place name",
      description: "tester place desc",
      address: "123 Street",
      coordinates: "xxx,yyy",
      personalNote: "testing testing",
    }
    store.dispatch(action);
    expect(store.getState().masterTagList).toEqual(tagListReducer(undefined, action));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer with action', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().addTagFormVisible).toEqual(formVisibleReducer(undefined, action));
  });

});