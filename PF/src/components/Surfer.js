import React from 'react';
import './Surfer.css';

const Surfer = (props) => {
  return (
    <div>
      <div className={props.portSurferLine}></div>
      <div className={props.portSurferPage}>
        <button id='surfer' onClick={props.handlePortSurfListenerRollBack}><i className="fa fa-power-off"></i></button>
        <h1>Surfer </h1>
        <p>Your guide for sightseings across the globe </p>
      </div>
    </div>
  );
};

export default Surfer;
