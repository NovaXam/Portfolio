import React from 'react';
import './Source.css';

const Source = (props) => {
  console.log(props.sourceLine);
  console.log(props.sourcePage);
  return (
    <div>
      <div className={props.sourceLine}></div>
      <div className={props.sourcePage}>
        <button id='about' onClick={props.handleSourceListenerRollBack}><i className="fa fa-power-off"></i></button>
        <h1>Source </h1>
        <p>What taught me and make impact on my professional vision </p>
      </div>
    </div>
    );
};

export default Source;
