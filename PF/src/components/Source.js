import React from 'react';
import './Source.css';

const Source = (props) => {
  return (
    <div className="sourceMainBlock">
      <div className={props.sourceLine}>
        <p>SOURCE</p>
      </div>
      <div className={props.sourcePage}>
        <button id='about' onClick={props.handleSourceListenerRollBack}><i className="fa fa-power-off"></i></button>
        <div className="innerBlock">
          <h1>Source </h1>
          <p>What taught me and make impact on my professional vision </p>
        </div>
      </div>
    </div>
    );
};

export default Source;
