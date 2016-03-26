import merge from 'lodash/merge';

const initialState = {
  loadingAlbum: false,
  loadedAlbum: false,
  error: null,
};

function loadAlbum(state = initialState, action) {
  // We don't want to mutate state directly
  switch (action.type) {
    case 'LOAD_ALBUM_REQUEST':
      return merge({}, state, {
        loadingAlbum: true,
      });
    case 'LOAD_ALBUM_SUCCESS':
      return merge({}, state, {
        loadingAlbum: false,
        loadedAlbum: true,
        albumName: action.albumName,
        photos: action.photos,
      });
    case 'LOAD_ALBUM_ERROR':
      return merge({}, state, {
        error: action.error
      });
    default:
      return state;
  }
}

export default loadAlbum;
