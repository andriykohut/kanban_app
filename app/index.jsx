import './main.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import ReactDOM from 'react-dom';

import kanbanApp from './reducers.js';
import AppContainer from './containers/AppContainer';
import DevTools from './containers/DevTools';

const enhancer = compose(
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

function configureStore(initialState) {
  const store = createStore(kanbanApp, initialState, enhancer);
  return store;
}

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppContainer />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
