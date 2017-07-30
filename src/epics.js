// Config variables
import { config } from './config';

// Action creators
import { updateGifs } from './actionCreators';

// AN EPIC...
// takes an observable of actions
// returns a new observable of actions

const { API_KEY } = config;

export const testEpic = action$ =>
  action$.filter(action => action.type === 'SEND_QUERY')
  .mergeMap(({ query }) => fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=5`)
    .then(res => res.json())
    .catch(err => console.log('error is ', err)))
      .do(results => console.log('results: ', results))
      .map(results => updateGifs(results))
