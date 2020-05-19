import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import tagListReducer from '../../reducers/tag-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Check that initial state of tagListReducer matches root reducer', () => {
    expect(store.getState().masterTagList).toEqual(tagListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer with no state', () => {
    expect(store.getState().addTagFormVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer with no state', () => {
    expect(store.getState().editTagFormVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer with action', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().addTagFormVisible).toEqual(formVisibleReducer(undefined, action));
  });

});