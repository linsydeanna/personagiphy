// Libraries
import React from 'react';
import { Provider } from 'react-redux';

// Routes
import Routes from './routes';

// Store
import store from './store';

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
