// Libraries
import React from 'react';

// Actions
import { sendRequest } from './actionCreators';

// Store
import store from './store';

export const PersonalityTypes = () => {
  return (
    <div>
      <p onMouseOver={() => store.dispatch(sendRequest('ESFJ', 'introversion'))}>
        ESFJ
      </p>
      <p onMouseOver={() => store.dispatch(sendRequest('INTP', 'extroversion'))}>
        INTP
      </p>
    </div>
  )
};
