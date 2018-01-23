import React from 'react';
import Scroll from 'react-scroll';
import './Tweedr.css';
import TweedrPage from '../assets/Portfolio/Tweedre.png';
import buttonFolio from '../assets/buttonFolio.png';
import iconsGit from '../assets/Icons/iconsGH.png';
import iconsHeroku from '../assets/Icons/iconsHeroku.png';

const Element = Scroll.Element;

const Tweedr = (props) => {
  return (
    <Element name="Tweedr" style={props.heightTweedr}>
      <div className="portTweedrMainBlock">
        <div className={props.portTweedrLine}>
          <p>TWEEDR</p>
        </div>
        <div className={props.portTweedrPage}>
          <img id='tweedr' src={buttonFolio} alt="tweedrPro" onClick={props.handlePortTweedrListenerRollBack} />
          <div className="innerBlock">
            <div className="left">
              <div className="mainPic"><img id="GuPicture" src={TweedrPage} alt="tweedrPic" /></div>
              <div className="icons">
                <a href="https://git.generalassemb.ly/NovaXam/Tweeder_App" target="blank"><img id="iconGit" src={iconsGit} alt="linkToProGit" /></a>
                <a href="https://tweeder-app.herokuapp.com" target="blank"><img id="iconHer" src={iconsHeroku} alt="linkProHer" /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>Tweeter simulator. When user inserted his comments and press button "tweeeed in" it appears
                   on the list below. User can edit his comments, upgrade and delete.
                </p>
              </div>
              <div className="tech">
                <h1>TECHNOLOGIES</h1>
                <p>JSX, Css3, Javascript(ES6), GitHub, Node.js, React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Tweedr;
