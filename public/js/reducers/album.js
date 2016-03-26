import merge from 'lodash/merge';

function album(state = {}, action) {
  // We don't want to mutate state directly
  switch (action.type) {
    case 'LOAD_ALBUM_REQUEST':
      return merge({}, state, {
        loadingAlbum: true,
        loadedAlbum: false,
        error: null,
      });
    case 'LOAD_ALBUM_SUCCESS':
      return merge({}, state, {
        loadingAlbum: false,
        loadedAlbum: true,
        albumName: action.albumName,
        photos: action.photos,
        currentImage: action.photos[0],
      });
    case 'LOAD_ALBUM_ERROR':
      return merge({}, state, {
        error: action.error
      });
    case 'UPDATE_CURRENT_IMAGE':
      const newCurrentImage = state.photos.filter((photo) => {
        return photo.id === action.id.toString();
      });
      return merge({}, state, {
        currentImage: newCurrentImage[0],
      });
    default:
      return state;
  }
}

export default album;
