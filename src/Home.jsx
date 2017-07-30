// Libraries
import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

// Styles
import './App.css';

// Components
import { PersonalityTypes } from './PersonalityTypes';

const Home = () => (
  <div className="Home">
    <PersonalityTypes />
  </div>
);

const mapStateToProps = ({ requests, gifs }) => ({
  requests,
  gifs
});

export default withRouter(connect(mapStateToProps)(Home));
