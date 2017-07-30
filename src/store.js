// Libraries
import logger from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// Reducers
import { requestsReducer, gifsReducer } from './reducers';

// Epics
import { testEpic } from './epics';

const rootReducer = combineReducers({
  requests: requestsReducer,
  gifs: gifsReducer,
});

const defaultState = {
  requests: [],
  gifs: [],
};

const epicMiddleware = createEpicMiddleware(testEpic);

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(logger, epicMiddleware),
);

export default store;
