import React from 'react';
import './Guess.css';
import Guesspage from '../assets/Portfolio/Guess_page.png';
import iconGit from '../assets/arrows.png';

const Guess = (props) => {
  return (
      <div className="portGuessMainBlock">
        <div className={props.portGuessLine}>
          <p>GUESS</p>
        </div>
        <div className={props.portGuessPage}>
          <button id='guess' onClick={props.handlePortGuessListenerRollBack}>&#8679;</button>
          <div className="innerBlock">
            <div className="left">
              <div className="mainPic"><img id='GuPicture' src={Guesspage} /></div>
              <div className="icons">
                <a href="https://github.com/NovaXam" target="blank"><img id="iconGit" src={iconGit} /></a>
                <a href=""><img id="iconHer" src={iconGit} /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>Simple strategy one user game for every ages. The logic of the game is to guess
                   behind what square the picture is hidden on the board. The game has four topics:
                   Mario, Star Wars, Animals and SuperHeros. For each right click user gets points.
                   The goal of the game is to guess 8 squares for the limited time and attempts.
                </p>
              </div>
              <div className="tech">
                <h1>TECHNOLOGIES</h1>
                <p>Html5, Css3, Javascript(ES6), GitHub</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
}

export default Guess;
