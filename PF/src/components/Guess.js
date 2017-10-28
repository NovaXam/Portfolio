import React from 'react';
import './Guess.css';
import Guesspage from '../assets/Portfolio/Guess_page.png';
import iconGit from '../assets/arrows.png';
import buttonFolio from '../assets/buttonFolio.png';
import iconsGit from '../assets/Icons/iconsGH.png';
import iconsHeroku from '../assets/Icons/iconsHeroku.png';

const Guess = (props) => {
  return (
      <div className="portGuessMainBlock" style={props.heightGuess}>
        <div className={props.portGuessLine}>
          <p>GUESS</p>
        </div>
        <div className={props.portGuessPage}>
          <img id='guess' src={buttonFolio} onClick={props.handlePortGuessListenerRollBack} />
          <div className="innerBlock">
            <div className="left">
              <div className="mainPic"><img id='GuPicture' src={Guesspage} /></div>
              <div className="icons">
                <a href="https://github.com/NovaXam/Project_1_GuessAndGo" target="blank"><img id="iconGit" src={iconsGit} /></a>
                <a href="#"><img id="iconHer" src={iconsHeroku} /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>Simple strategy one user game for any age. The goal of the game is to match
                   the square with the hidden picture behind it. The game has four topics:
                   Mario, Star Wars, Animals and SuperHeros. For each right click user gets points.
                   The win condition is to guess 8 squares within the limited time and number of attempts.
                </p>
              </div>
              <div className="tech">
                <h1>TECHNOLOGIES</h1>
                <p>Html5, Css3, Javascript(ES6), GitHub, Charts</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
}

export default Guess;
