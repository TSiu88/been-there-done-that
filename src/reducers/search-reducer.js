import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  searchResults: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_SEARCH_RESULTS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_RESULTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        searchResults: action.searchResults
      });
    case c.GET_RESULTS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
    }
};