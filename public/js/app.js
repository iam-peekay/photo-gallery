import React from 'react';
import { render } from 'react-dom';
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
