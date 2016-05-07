import { GET_STARTED } from '../actions';
import { WELCOME_TEXT } from '../constants';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case GET_STARTED:
      return { welcomeText: WELCOME_TEXT };
    default:
      return state;
  }
}

export default rootReducer;
