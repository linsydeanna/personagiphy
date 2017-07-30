// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs';

// Components
import App from './App.jsx';

// registerServiceWorker
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
