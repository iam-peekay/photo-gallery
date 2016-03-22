// import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from '../constants/AppConstants';
import assignToEmpty from './../utils/assign';

const initialState = {
  something: 'something'
};

function homeReducer(state = initialState, action) {
  Object.freeze(state);
  switch (action.type) {
    case 'CHANGE_SOMETHING':
      return assignToEmpty(state, {
        something: action.name
      });
    default:
      return state;
  }
}

export default homeReducer;
