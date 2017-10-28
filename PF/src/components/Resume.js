import React from 'react';
import './Resume.css';
import buttonInfo from '../assets/buttonInfo.png';
import louder from '../assets/Icons/loudspeaker.png';
import downloadResume from '../assets/arrows.png';

const Resume = (props) => {
  return (
    <div className="resumeMainBlock">
      <div className={props.resumeLine}>
        <p>CONTACT</p>
      </div>
      <div className={props.resumePage}>
        <img id='info' src={buttonInfo} onClick={props.handleResumeListenerRollBack} />
        <div className="innerBlock">
          <div className="left">
            <p><b>LinkedIn:</b><br /> https://www.linkedin.com/in/maxnovakh/</p>
            <p><b>Skype:</b><br /> oxotnicdog </p>
          </div>
          <img id="photo" src={louder} />
          <div className="right">
            <p><b>StackOverFlow:</b> https://stackoverflow.com/users/8633998/novaxam</p>
            <p><b>Email:</b><br /> novakhm@gmail.com</p>
          </div>
        </div>
        <div className="buttons">
          <p>RESUME</p>
          <a href="https://drive.google.com/file/d/0B_NT3R2APQLlX0dHeEZWc3ZTT2M/view?usp=sharing" target="blank"><img src={downloadResume} /></a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
