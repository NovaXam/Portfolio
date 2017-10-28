import React from 'react';
import './Surfer.css';
import Surferpage from '../assets/Portfolio/Surfer_page.png';
import iconGit from '../assets/arrows.png';
import buttonSerf from '../assets/buttonFolio.png';
import iconsGit from '../assets/Icons/iconsGH.png';
import iconsHeroku from '../assets/Icons/iconsHeroku.png';

const Surfer = (props) => {
  return (
    <div className="portSurfMainBlock" style={props.heightSurfer}>
      <div className={props.portSurferLine}>
        <p>S-SURFER</p>
      </div>
      <div className={props.portSurferPage}>
        <img id='surfer' src={buttonSerf} onClick={props.handlePortSurfListenerRollBack} />
        <div className="innerBlock">
          <div className="left">
              <div className="mainPic"><img id='SurfPicture' src={Surferpage} /></div>
              <div className="icons">
                <a href="https://github.com/NovaXam/project-2-express" target="blank"><img id="iconGit" src={iconsGit} /></a>
                <a href="#"><img id="iconHer" src={iconsHeroku} /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>“Sightseeing surfer” is an interactive guide where the user can get
                    information about available sightseeings in the desired destinations.
                    Project uses local database storage so users can query and manage
                    data with full CRUD functionality.
                </p>
              </div>
              <div className="tech">
                <h1>TECHNOLOGIES</h1>
                <p>Html5, Css3, Javascript(ES6), GitHub, Node.js, Express, Psql</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Surfer;
