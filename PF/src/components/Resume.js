import React from 'react';
import './Resume.css';
import buttonInfo from '../assets/buttonInfo.png';

const Resume = (props) => {
  return (
    <div className="resumeMainBlock">
      <div className={props.resumeLine}>
        <p>CONTACT</p>
      </div>
      <div className={props.resumePage}>
        <img id='info' src={buttonInfo} onClick={props.handleResumeListenerRollBack} />
        <div className="innerBlock">
          <h1>INFO </h1>
          <p>Data </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
