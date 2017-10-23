import React from 'react';
import './Surfer.css';
import Surferpage from '../assets/Portfolio/Surfer_page.png';
import iconGit from '../assets/arrows.png';

const Surfer = (props) => {
  return (
    <div className="portSurfMainBlock">
      <div className={props.portSurferLine}>
        <p>S-SURFER</p>
      </div>
      <div className={props.portSurferPage}>
        <button id='surfer' onClick={props.handlePortSurfListenerRollBack}>&#8679;</button>
        <div className="innerBlock">
          <div className="left">
              <div className="mainPic"><img id='SurfPicture' src={Surferpage} /></div>
              <div className="icons">
                <a href="https://github.com/NovaXam" target="blank"><img id="iconGit" src={iconGit} /></a>
                <a href=""><img id="iconHer" src={iconGit} /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>“Sightseeing surfer” is an interactive guide where user can get
                    an information about potential sightseeings in the place where he/she
                    is about to go all around the world. Project uses a local DB so users
                    can make a query and manage a data using full CRUD.
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