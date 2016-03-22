import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import createHistory from 'history/lib/createBrowserHistory';
import Root from './containers/Root';

// Import the CSS file
import './../css/main.css';

import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer);
const history = createHistory();

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
