// Libraries
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import Home from "./Home.jsx";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  )
};

export default Routes;
