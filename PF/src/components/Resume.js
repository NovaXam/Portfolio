import React from 'react';
import './Resume.css';

const Resume = (props) => {
  return (
    <div className="resumeMainBlock">
      <div className={props.resumeLine}>
        <p>CONTACT</p>
      </div>
      <div className={props.resumePage}>
        <button id='about' onClick={props.handleResumeListenerRollBack}>&#8679;</button>
        <div className="innerBlock">
          <h1>INFO </h1>
          <p>Data </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
