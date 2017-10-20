import React from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import logo from '../assets/pepsi.png';
import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <div className='portMainBlock'>
      <div className={props.portLine}>
        <button id='portfolio' onClick={props.handlePortfolioListenerRollBack}><i className="fa fa-power-off"></i></button>
      </div>
      <div className={props.portPage}>
        <ul>
          <li onClick={props.handlerPortGuessListener}>
            <img id='Guess' src={logo} />
            <div className="hvr-back-pulse">
              <p>GUESS AND GO</p>
            </div>
          </li>
          <li onClick={props.handlerPortSurfListener}>
            <img id='Surfer' src={logo} onClick={props.handlerPortSurfListener} />
            <div className="hvr-back-pulse"></div>
          </li>
          <li><img id='Monster' src={logo} onClick={props.handlerPortMonListener}/></li>
          <li><img id='MissionX' src={logo} onClick={props.handlerPortMissListener}/></li>
          <li><img id='MissionX' src={logo} onClick={props.handlerPortMissListener}/></li>
          <li><img id='MissionX' src={logo} onClick={props.handlerPortMissListener}/></li>
        </ul>
      </div>
    </div>
    );
}

export default Portfolio;
