import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <div className="aboutMainBlock">
      <div className={props.aboutLine}>
        <p>ABOUT</p>
      </div>
      <div className={props.aboutPage}>
        <button id="about" onClick={props.handleAboutListenerRollBack}><i className="fa fa-power-off"></i></button>
        <div className="innerBlock">
            <h1>About</h1>
            <p>Full stack software developer </p>
        </div>
      </div>
    </div>
  );
};

export default About;
