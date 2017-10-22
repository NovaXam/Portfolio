import React from 'react';
import './Surfer.css';

const Surfer = (props) => {
  return (
    <div className="portSurfMainBlock">
      <div className={props.portSurferLine}>
        <button id='surfer' onClick={props.handlePortSurfListenerRollBack}><i className="fa fa-power-off"></i></button>
      </div>
      <div className={props.portSurferPage}>
        <div className="innerBlock">
          <h1>Surfer </h1>
          <p>Your guide for sightseings across the globe </p>
        </div>
      </div>
    </div>
  );
};

export default Surfer;
