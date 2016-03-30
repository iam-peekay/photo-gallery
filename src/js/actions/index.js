/*
  Here we define the types of actions we want to create. Reducers
  listen for these action events and update the state accordingly.
  State is never updated in these action creators. Action creators
  are just plain objects.
*/

import axios from 'axios';
import * as types from './../constants/ActionTypes';
// import ip from 'ip';
// const ipAddress = ip.address();

export function requestAlbumData() {
  return {
    type: types.LOAD_ALBUM_REQUEST,
  };
}

export function receiveAlbumData(json) {
  return {
    type: types.LOAD_ALBUM_SUCCESS,
    albumName: json.album.name,
    photos: json.photos,
  };
}

export function errorLoadingAlbum(error) {
  return {
    type: types.LOAD_ALBUM_ERROR,
    error: error,
  };
}

export function updateCurrentImage(id) {
  return {
    type: types.UPDATE_CURRENT_IMAGE,
    id: id,
  };
}

// Initialize our app state with the images
export function initApp() {
  return dispatch => {
    dispatch(requestAlbumData());
    // Using an asynchronous call to show how we would fetch images if
    // they were stored in a database or some external location.
    return axios.get(`http://localhost:3000/gallery.json`)
            .then(response => {
              dispatch(receiveAlbumData(response.data));
            })
            .catch(error => dispatch(errorLoadingAlbum(error)));
  };
}
