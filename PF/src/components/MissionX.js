import React from 'react';
import './MissionX.css';

const MissionX = (props) => {
  return (
    <div>
      <div className={props.portMissionXLine}></div>
      <div className={props.portMissionXPage}>
        <button id='missionX' onClick={props.handlePortMissListenerRollBack}><i className="fa fa-power-off"></i></button>
        <h1>MissionX </h1>
        <p>Educational project to make Mars closer to students </p>
      </div>
      <div id='bottomMiss'></div>
    </div>
  );
};

export default MissionX;
