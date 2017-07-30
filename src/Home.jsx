// Libraries
import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

// Styles
import './App.css';

// Components
import { PersonalityTypes } from './PersonalityTypes';

const Home = ({ gifs }) => (
  <div>
    <PersonalityTypes />
    {gifs.map(gif =>
      <iframe
        key={gif.id}
        src={gif.embed_url}
        width="240"
        height="149"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        title="abc"
      >
      </iframe>)}
  </div>
);

const mapStateToProps = ({ gifs }) => ({
  gifs
});

export default withRouter(connect(mapStateToProps)(Home));
