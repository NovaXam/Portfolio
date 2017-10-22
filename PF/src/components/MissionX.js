import React from 'react';
import './MissionX.css';

const MissionX = (props) => {
  return (
    <div className="portMissMainBlock">
      <div className={props.portMissionXLine}>
        <button id='missionX' onClick={props.handlePortMissListenerRollBack}><i className="fa fa-power-off"></i></button>
      </div>
      <div className={props.portMissionXPage}>
        <div className="innerBlock">
          <h1>MissionX </h1>
          <p>Educational project to make Mars closer to students </p>
        </div>
      </div>
      <div id='bottomMiss'></div>
    </div>
  );
};

export default MissionX;
