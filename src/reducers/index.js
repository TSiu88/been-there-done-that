import formVisibleReducer from './form-visible-reducer';
import tagListReducer from './tag-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  addTagFormVisible: formVisibleReducer,
  editTagFormVisible: formVisibleReducer,
  masterTagList: tagListReducer,
  firestore: firestoreReducer
});

export default rootReducer;