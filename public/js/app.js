import React from 'react';
import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
// import DevTools from './containers/DevTools';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from './reducers/rootReducer';
import { browserHistory } from 'react-router';
import Root from './containers/Root';
import configureStore from './store/configureStore';
// Import the main CSS file
import './../css/main.css';

const store = configureStore();

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
);
