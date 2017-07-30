// Libraries
import React from 'react';

// Actions
import { sendRequest } from './actionCreators';

// Store
import store from './store';

export const PersonalityTypes = () => {
  return (
    <div>
      <p onMouseOver={() => store.dispatch(sendRequest('ESFJ'))}>
        ESFJ
      </p>
      <p onMouseOver={() => store.dispatch(sendRequest('INTP'))}>
        INTP
      </p>
    </div>
  )
};
