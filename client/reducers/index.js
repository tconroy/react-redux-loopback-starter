import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import rootReducer from './RootReducer';

export default combineReducers({
  rootReducer,
  routing: routerReducer,
});
