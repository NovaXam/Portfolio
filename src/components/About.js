import React from 'react';
import Scroll from 'react-scroll';
import './About.css';
import buttonAbout from '../assets/buttonAbout.png';
import me from '../assets/Icons/Me1.JPG';
import linkedIn from '../assets/Icons/iconsLI.png';
import stackOF from '../assets/Icons/iconsSO.png';
import ga from '../assets/Icons/iconsGA.png';

const About = (props) => {
  const Element = Scroll.Element;

  return (
    <Element name="About" style={props.heightAbout}>
      <div className="aboutMainBlock">
        <div className={props.aboutLine}>
          <p>ABOUT</p>
        </div>
        <div className={props.aboutPage}>
          <img id="about" src={buttonAbout} alt="aboutClose" onClick={props.handleAboutListenerRollBack} />
          <div className="innerBlock">
            <div className="left">
              <p>Hi! My name is Maksym, and I'm passionate software developer with
                 an eye for design.
                 I enjoy all aspects of web development, front-end and back-end technologies as well.
              </p>
            </div>
            <img id="photo" alt="photoMe" src={me} />
            <div className="right">
              <p>This site was built to get you aquainted with some of my projects, my personality and of
                 course to help us collaborate. Enjoy your time exploring my space and may the force be with you...
              </p>
            </div>
          </div>
          <div className="iconsLink">
            <a href="https://stackoverflow.com/users/8633998/novaxam" target="blank"><img src={stackOF} alt="iconSOF" /></a>
            <a href="https://www.linkedin.com/in/maxnovakh/" target="blank"><img id="linkbutton" src={linkedIn} alt="iconLI" /></a>
            <a href="https://profiles.generalassemb.ly/profiles/novaxam" target="blank"><img src={ga} alt="iconGA" /></a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
