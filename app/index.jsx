import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactDOM from 'react-dom';

import kanbanApp from './reducers.js';
import AppContainer from './containers/AppContainer';
import DevTools from './containers/DevTools';

function configureStore(initialState) {
  const store = createStore(kanbanApp, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
