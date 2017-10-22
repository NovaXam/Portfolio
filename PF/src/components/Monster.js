import React from 'react';
import './Monster.css';

const Monster = (props) => {
  return (
    <div className="portMonMainBlock">
      <div className={props.portMonsterLine}>
          <button id='monster' onClick={props.handlePortMonListenerRollBack}><i className="fa fa-power-off"></i></button>
        </div>
        <div className={props.portMonsterPage}>
          <div className='innerBlock'>
            <h1>Musci Monster </h1>
            <p>Your personal misic labrary </p>
          </div>
      </div>
    </div>
    );
};

export default Monster;
