/*
  Here we define the main reducer which is responsible for updating
  our state. Reducers are the thing that are allowed to update state
  in Redux.
*/

import { filter, merge } from 'lodash';
import * as ActionTypes from './../constants/ActionTypes';

function album(state = {}, action) {
  // We never want to mutate state object directly, so we create
  // a new copy of the state object when updating a part of state
  switch (action.type) {
    case ActionTypes.LOAD_ALBUM_REQUEST:
      return merge({}, state, {
        loadingAlbum: true,
        loadedAlbum: false,
        error: null,
      });
    case ActionTypes.LOAD_ALBUM_SUCCESS:
      return merge({}, state, {
        loadingAlbum: false,
        loadedAlbum: true,
        albumName: action.albumName,
        photos: action.photos,
        currentImage: action.photos[0],
      });
    case ActionTypes.LOAD_ALBUM_ERROR:
      return merge({}, state, {
        loadingAlbum: false,
        error: action.error,
      });
    case ActionTypes.UPDATE_CURRENT_IMAGE:
      const newCurrentImage = filter(state.photos, ['id', action.id.toString()]);
      return merge({}, state, {
        currentImage: newCurrentImage[0],
      });
    default:
      return state;
  }
}

export default album;
