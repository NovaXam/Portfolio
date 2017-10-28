import React from 'react';
import './About.css';
import buttonAbout from '../assets/buttonAbout.png';
import me from '../assets/Icons/photo.png';
import linkedIn from '../assets/Icons/iconsLI.png';
import stackOF from '../assets/Icons/iconsSO.png';
import ga from '../assets/Icons/iconsGA.png';

const About = (props) => {
  return (
    <div className="aboutMainBlock" style={props.heightAbout}>
      <div className={props.aboutLine}>
        <p>ABOUT</p>
      </div>
      <div className={props.aboutPage}>
        <img id="about" src={buttonAbout} onClick={props.handleAboutListenerRollBack} />
        <div className="innerBlock">
          <div className="left">
            <p>Hi! My name is Maksym, and I'm passionate software developer with
               an eye for design.
               I enjoy all aspects of web development, but I'm most interested in back-end technology.
            </p>
          </div>
          <img id="photo" src={me} />
          <div className="right">
            <p>This site was built to get you aquainted with some of my projects, my personality and of
               course to help us collaborate. Enjoy your time exploring my space and may the force be with you...
            </p>
          </div>
        </div>
        <div className="iconsLink">
          <a href="https://stackoverflow.com/users/8633998/novaxam" target="blank"><img src={stackOF} /></a>
          <a href="https://www.linkedin.com/in/maxnovakh/" target="blank"><img id="linkbutton" src={linkedIn} /></a>
          <a href="https://profiles.generalassemb.ly/profiles/novaxam" target="blank"><img src={ga} /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
