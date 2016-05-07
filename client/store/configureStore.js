import { createStore } from 'redux';
import reducers from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(reducers);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

