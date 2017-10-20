import React from 'react';
import './About.css';

const About = (props) => {
  return (
    <div>
      <div className={props.aboutLine}></div>
      <div className={props.aboutPage}>
        <button id='about' onClick={props.handleAboutListenerRollBack}><i className="fa fa-power-off"></i></button>
        <h1>About </h1>
        <p>Full stack software developer </p>
      </div>
    </div>
  );
};

export default About;
