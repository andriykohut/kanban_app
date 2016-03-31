import './main.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import ReactDOM from 'react-dom';

import kanbanApp from './reducers.js';
import AppContainer from './containers/AppContainer';

const enhancer = compose(
  persistState(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

function configureStore(initialState) {
  const store = createStore(kanbanApp, initialState, enhancer);
  return store;
}

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
