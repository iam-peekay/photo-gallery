/**
 * This file is used to combine all reducers
 */
import album from './album';

// Combine our reducers
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  album
});

export default rootReducer;
