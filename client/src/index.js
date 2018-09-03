/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware, connectRouter } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import { registerObserver } from 'react-perf-devtool';

import './index.css';
import app from './app';

const history = createHistory();
const middleware = [routerMiddleware(history), thunkMiddleware];
const enhancers = [];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  const loggerMiddleware = createLogger();
  middleware.push(loggerMiddleware);

  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const options = {
  shouldLog: true,
  port: 8181,
  timeout: 12000,
  components: ['App'], // Load the extension after 12 sec.
};

function callback(measures) {
  // do something with the measures
}
registerObserver(options, callback);

const AppContainer = app.container;

const store = createStore(
  connectRouter(history)(app.reducer),
  compose(
    applyMiddleware(...middleware),
    ...enhancers,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
