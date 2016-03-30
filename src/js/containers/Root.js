/*
  This is the root of our app. We inject Redux store into our app
  and set up our routes here. In our case, we only have one index
  route which holds our image gallery component.
*/

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';
import GalleryPage from './GalleryPage';
import App from './App';
import DevTools from './DevTools';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={App}>
            <Route path="/" component={GalleryPage} />
            <DevTools />
          </Route>
        </Router>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
