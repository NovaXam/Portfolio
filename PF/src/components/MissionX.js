import React from 'react';
import './MissionX.css';
import MissionXpage from '../assets/Portfolio/Mars_page.png';
import iconGit from '../assets/arrows.png';

const MissionX = (props) => {
  return (
    <div className="portMissMainBlock">
      <div className={props.portMissionXLine}>
        <p>MISSION-X</p>
      </div>
      <div className={props.portMissionXPage}>
        <button id='missionX' onClick={props.handlePortMissListenerRollBack}>&#8679;</button>
        <div className="innerBlock">
          <div className="left">
              <div className="mainPic"><img id='MissPicture' src={MissionXpage} /></div>
              <div className="icons">
                <a href="https://github.com/NovaXam" target="blank"><img id="iconGit" src={iconGit} /></a>
                <a href=""><img id="iconHer" src={iconGit} /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>Mission X has an educational purpose and allows users get known about NASA’s space
                   missions on Mars and to explore this planet by pictures getting from rovers fulfilling
                   a scientific mission on Mars starting from 2006 till nowadays. Moreover, MissionX gives
                   users an opportunity to look up not only the past but the future of the Mars’s exploration.
                </p>
              </div>
              <div className="tech">
                <h1>TECHNOLOGIES</h1>
                <p>Html5, Css3, Javascript(ES6), GitHub, Node.js, Express, React, Psql, NASA's API, external graphic library</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MissionX;
