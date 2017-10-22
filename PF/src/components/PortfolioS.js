import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import logo from '../assets/pepsi.png';
import './Portfolio.css';

const Portfolio = (props) => {
  console.log(props.workPointer);
  return (
    <div className="portMainBlock">
      <div className={props.portLine}>
        <p>PORTFOLIO</p>
      </div>
      <div className={props.portPage}>
        <button id="portfolio" onClick={props.handlePortfolioListenerRollBack}><i className="fa fa-power-off"></i></button>
        <ul>
          <li onClick={props.handlerPortGuessListener}>
            <img id="Guess" alt="" src={logo} />
            <div className="hvr-back-pulse" style={props.workPointerGuess}>
              <h1>GUESS AND GO</h1>
            </div>
          </li>
          <li onClick={props.handlerPortSurfListener}>
            <img id="Surfer" alt="" src={logo} />
            <div className="hvr-back-pulse" style={props.workPointerSurf}>
              <h1>SIGHTSEINGS <br />SURFER</h1>
            </div>
          </li>
          <li onClick={props.handlerPortMonListener} >
            <img id="Monster" alt="" src={logo} />
            <div className="hvr-back-pulse" style={props.workPointerMon}>
              <h1>MUSIC MONSTER</h1>
            </div>
          </li>
          <li onClick={props.handlerPortMissListener}>
            <img id="MissionX" alt="" src={logo} />
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
