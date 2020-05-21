import * as c from './ActionTypes';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const toggleAddForm = () => ({
  type: c.TOGGLE_ADD_FORM
});

export const requestSearchResults = () => ({
  type: c.REQUEST_SEARCH_RESULTS
});

export const getResultsSuccess = (searchResults) => ({
  type: c.GET_RESULTS_SUCCESS,
  searchResults
});

export const getResultsFailure = (error) => ({
  type: c.GET_RESULTS_FAILURE, 
  error
});

export const makeApiSearchCall = (data) => {
  let point = data.result.center; // Capture the result coordinates

  //Add Tilequery API call variable setting here
  const tileset = 'mapbox.mapbox-streets-v8'; // replace this with the ID of the tileset
  const radius = 1609; // 1609 meters is roughly equal to one mile
  const limit = 10; // The maximum amount of results to return

  // Create new variable for Tilequery API request
  let query = 'https://api.mapbox.com/v4/' + tileset + '/tilequery/' + point[0] + ',' + point[1] + '.json?radius=' + radius + '&limit= ' + limit + '&dedupe&layers=poi_label&access_token=' + mapboxgl.accessToken;
  return dispatch => {
    dispatch(requestSearchResults);
    return fetch(query).then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getResultsSuccess(jsonifiedResponse.results));
      })
      .catch((error) => {
        dispatch(getResultsFailure(error));
      });
  }
}