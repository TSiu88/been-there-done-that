import formVisibleReducer from './form-visible-reducer';
import tagListReducer from './tag-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  addTagFormVisible: formVisibleReducer,
  editTagFormVisible: formVisibleReducer,
  masterTagList: tagListReducer
});

export default rootReducer;