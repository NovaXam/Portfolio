import React from 'react';
import './Monster.css';

const Monster = (props) => {
  return (
    <div>
      <div className={props.portMonsterLine}></div>
        <div className={props.portMonsterPage}>
          <button id='monster' onClick={props.handlePortMonListenerRollBack}><i className="fa fa-power-off"></i></button>
          <h1>Musci Monster </h1>
          <p>Your personal misic labrary </p>
      </div>
    </div>
    );
};

export default Monster;
