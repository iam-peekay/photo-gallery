/**
 * Combine all reducers in this file
 */
import album from './album';

// Combine our reducers
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  album
});

export default rootReducer;
