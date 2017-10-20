import React from 'react';
import './Resume.css';

const Resume = (props) => {
  return (
    <div>
      <div className={props.resumeLine}></div>
      <div className={props.resumePage}>
        <button id='about' onClick={props.handleResumeListenerRollBack}><i className="fa fa-power-off"></i></button>
        <h1>Resume </h1>
        <p>My resume </p>
      </div>
      <div id='bottomRes'></div>
    </div>
    );
}

export default Resume;
