import React from 'react';
import Scroll from 'react-scroll';
import MonsterTitle from '../assets/Portfolio/Monster_title.png';
import GuessTitle from '../assets/Portfolio/Guess_title.png';
import SurferTitle from '../assets/Portfolio/Surfer_title.png';
import MarsTitle from '../assets/Portfolio/Mars_title.png';
import TweedrTitle from '../assets/Portfolio/Twedre_title.png';
import buttonFolio from '../assets/buttonFolio.png';
import './Portfolio.css';

const Element = Scroll.Element;

const Portfolio = (props) => {
  return (
    <Element name="Portfolio">
      <div className="portMainBlock" style={props.height}>
        <div className={props.portLine}>
          <p>WORKS</p>
        </div>
        <div className={props.portPage}>
          <img id="portfolio" src={buttonFolio} alt="imagePort" onClick={props.handlePortfolioListenerRollBack} />
          <ul>
            <li onClick={props.handlerPortGuessListener}>
              <img id="Guess" alt="image_project" src={GuessTitle} />
              <div className="hvr-back-pulse" style={props.workPointerGuess}>
                <h1>GUESS AND GO</h1>
              </div>
            </li>
            <li onClick={props.handlerPortSurfListener}>
              <img id="Surfer" alt="image_project" src={SurferTitle} />
              <div className="hvr-back-pulse" style={props.workPointerSurf}>
                <h1>SIGHTSEINGS <br />SURFER</h1>
              </div>
            </li>
            <li onClick={props.handlerPortMonListener} >
              <img id="Monster" alt="image_project" src={MonsterTitle} />
              <div className="hvr-back-pulse" style={props.workPointerMon}>
                <h1>MUSIC MONSTER</h1>
              </div>
            </li>
            <li onClick={props.handlerPortMissListener}>
              <img id="MissionX" alt="image_project" src={MarsTitle} />
              <div className="hvr-back-pulse" style={props.workPointerMiss}>
                <h1>MISSION X</h1>
              </div>
            </li>
            <li onClick={props.handlerPortTweedListener}>
              <img id="Tweed" alt="image_project" src={TweedrTitle} />
              <div className="hvr-back-pulse" style={props.workPointerTweedr}>
                <h1>TWEEDR</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
