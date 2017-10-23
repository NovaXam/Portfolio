import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import logo from '../assets/pepsi.png';
import MonsterTitle from '../assets/Portfolio/Monster_title.png';
import GuessTitle from '../assets/Portfolio/Guess_title.png';
import SurferTitle from '../assets/Portfolio/Surfer_title.png';
import MarsTitle from '../assets/Portfolio/Mars_title.png';
import './Portfolio.css';

const Portfolio = (props) => {
  console.log(props.workPointer);
  return (
    <div className="portMainBlock">
      <div className={props.portLine}>
        <p>PORTFOLIO</p>
      </div>
      <div className={props.portPage}>
        <button id="portfolio" onClick={props.handlePortfolioListenerRollBack}><b>&#8679;</b></button>
        <ul>
          <li onClick={props.handlerPortGuessListener}>
            <img id="Guess" alt="" src={GuessTitle} />
            <div className="hvr-back-pulse" style={props.workPointerGuess}>
              <h1>GUESS AND GO</h1>
            </div>
          </li>
          <li onClick={props.handlerPortSurfListener}>
            <img id="Surfer" alt="" src={SurferTitle} />
            <div className="hvr-back-pulse" style={props.workPointerSurf}>
              <h1>SIGHTSEINGS <br />SURFER</h1>
            </div>
          </li>
          <li onClick={props.handlerPortMonListener} >
            <img id="Monster" alt="" src={MonsterTitle} />
            <div className="hvr-back-pulse" style={props.workPointerMon}>
              <h1>MUSIC MONSTER</h1>
            </div>
          </li>
          <li onClick={props.handlerPortMissListener}>
            <img id="MissionX" alt="" src={MarsTitle} />
            <div className="hvr-back-pulse" style={props.workPointerMiss}>
              <h1>MISSION X</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;