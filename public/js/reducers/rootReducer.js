/**
 * Combine all reducers in this file
 */
import loadAlbum from './loadAlbum';

// Combine our reducers
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  loadAlbum
});

export default rootReducer;
