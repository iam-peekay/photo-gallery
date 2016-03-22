/**
 * Combine all reducers in this file
 */
import homeReducer from './homeReducer';

// Replace line below once you have several reducers with
// import { combineReducers } from 'redux';
// const rootReducer = combineReducers({ homeReducer, yourReducer })
const rootReducer = homeReducer;

export default rootReducer;
