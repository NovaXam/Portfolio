import React from 'react';
import Scroll from 'react-scroll';
import './MissionX.css';
import MissionXpage from '../assets/Portfolio/Mars_page.png';
import buttonMissionX from '../assets/buttonFolio.png';
import iconsGit from '../assets/Icons/iconsGH.png';
import iconsHeroku from '../assets/Icons/iconsHeroku.png';

const Element = Scroll.Element;

const MissionX = (props) => {
  return (
    <Element name="MissionX">
      <div className="portMissMainBlock" id="1" style={props.heightMissionX}>
        <div className={props.portMissionXLine}>
          <p>MISSION-X</p>
        </div>
        <div className={props.portMissionXPage}>
          <img id='missionX' src={buttonMissionX} alt="pictureBut" onClick={props.handlePortMissListenerRollBack} />
          <div className="innerBlock">
            <div className="left">
                <div className="mainPic"><img id='MissPicture' src={MissionXpage} alt="pictureBlockMis" /></div>
                <div className="icons">
                  <a href="https://github.com/NovaXam/MissionX" target="blank"><img id="iconGit" src={iconsGit} alt="iconToLinkMiss" /></a>
                  <a href="https://missionmarsx.herokuapp.com" target="blank"><img id="iconHer" src={iconsHeroku} alt="iconToHerMiss" /></a>
                </div>
              </div>
              <div className="right">
                <div className="descript">
                  <h1>DESCRIPTION</h1>
                  <p>Mission X has an educational purpose and allows users to find out about NASA’s space
                     missions on Mars. You can explore this planet using pictures from Rovers fulfilling
                     a scientific mission on Mars starting from 2006 till present. Moreover, MissionX gives
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
    </Element>
  );
};

export default MissionX;
