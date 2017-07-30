// Libraries
import logger from 'redux-logger';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// Reducers
import { queryReducer, gifsReducer } from './reducers';

// Epics
import { testEpic } from './epics';

const rootReducer = combineReducers({
  query: queryReducer,
  gifs: gifsReducer,
});

const defaultState = {
  query: {},
  gifs: [],
};

const epicMiddleware = createEpicMiddleware(testEpic);

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(logger, epicMiddleware),
);

export default store;
