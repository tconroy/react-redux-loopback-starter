import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

// component routes
//import SmartComponent from './containers/SmartComponent';
import LayoutComponent from './containers/LayoutComponent';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

export default function Routes() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={LayoutComponent} />
      </Router>
    </Provider>
  );
}
