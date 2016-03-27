import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import DevTools from './../containers/DevTools';
import rootReducer from './../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import { initApp } from './../actions';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  store.dispatch(initApp());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./../reducers/rootReducer', () => {
      const nextRootReducer = require('./../reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
