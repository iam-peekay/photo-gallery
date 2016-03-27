// import fetch from 'isomorphic-fetch';

// Define the action constants
const LOAD_ALBUM_REQUEST = 'LOAD_ALBUM_REQUEST';
const LOAD_ALBUM_SUCCESS = 'LOAD_ALBUM_SUCCESS';
const LOAD_ALBUM_ERROR = 'LOAD_ALBUM_ERROR';
const UPDATE_CURRENT_IMAGE = 'UPDATE_CURRENT_IMAGE';

export function requestAlbumData() {
  return {
    type: LOAD_ALBUM_REQUEST,
  };
}

export function receiveAlbumData(json) {
  return {
    type: LOAD_ALBUM_SUCCESS,
    albumName: json.album.name,
    photos: json.photos,
  };
}

export function errorLoadingAlbum(error) {
  return {
    type: LOAD_ALBUM_ERROR,
    error: error,
  };
}

export function updateCurrentImage(id) {
  return {
    type: UPDATE_CURRENT_IMAGE,
    id: id,
  };
}


// Initialize our app state with the images
export function initApp() {
  return dispatch => {
    dispatch(requestAlbumData());
    // Using asynchronous call to show how we would fetch images if
    // they were stored in a database or some other location.
    return fetch(`http://localhost:3000/gallery.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveAlbumData(json)))
      .catch(error => dispatch(errorLoadingAlbum(error)));
  };
}
