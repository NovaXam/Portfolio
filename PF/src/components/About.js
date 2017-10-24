import React from 'react';
import './About.css';
import buttonAbout from '../assets/buttonAbout.png';
import me from '../assets/Icons/photo.png';

const About = (props) => {
  return (
    <div className="aboutMainBlock">
      <div className={props.aboutLine}>
        <p>ABOUT</p>
      </div>
      <div className={props.aboutPage}>
        <img id="about" src={buttonAbout} onClick={props.handleAboutListenerRollBack} />
        <div className="innerBlock">
          <div className="left">
            <p>Hi! My name is maksym and it's all about software development and
               little bit of design.
               I like front-end but a back-end my true inspiration.
               This site was built to get you aquainted with some of my projects,
            </p>
          </div>
          <img id="photo" src={me} />
          <div className="right">
            <p>my personality and of course to help us collaborate.
               I tried to make design pretty friendly so it would be easy to find all
               interesting you information.
               Have a good exploration of my space and may force be with you...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
