// import fetch from 'isomorphic-fetch';

// Define the 3 types of requests
const LOAD_ALBUM_REQUEST = 'LOAD_ALBUM_REQUEST';
const LOAD_ALBUM_SUCCESS = 'LOAD_ALBUM_SUCCESS';
const LOAD_ALBUM_ERROR = 'LOAD_ALBUM_ERROR';
const UPDATE_CURRENT_IMAGE = 'UPDATE_CURRENT_IMAGE';

function requestAlbumData() {
  return {
    type: LOAD_ALBUM_REQUEST,
  };
}

function receiveAlbumData(json) {
  return {
    type: LOAD_ALBUM_SUCCESS,
    albumName: json.album.name,
    photos: json.photos,
  };
}

function errorLoadingAlbum(error) {
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

// export function fetchAlbum() {
//   return dispatch => {
//     dispatch(requestAlbumData());
//     return fetch(`http://localhost:3000/gallery.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receiveAlbumData(json)))
//       .catch(error => dispatch(errorLoadingAlbum(error)));
//   };
// }

export function initApp() {
  return dispatch => {
    dispatch(requestAlbumData());
    return fetch(`http://localhost:3000/gallery.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveAlbumData(json)))
      .catch(error => dispatch(errorLoadingAlbum(error)));
  };
}
