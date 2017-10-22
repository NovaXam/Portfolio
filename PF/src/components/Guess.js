import React from 'react';
import './Guess.css';

const Guess = (props) => {
  return (
      <div className="portGuessMainBlock">
        <div className={props.portGuessLine}>
          <button id='guess' onClick={props.handlePortGuessListenerRollBack}><i className="fa fa-power-off"></i></button>
        </div>
        <div className={props.portGuessPage}>
          <div className="innerBlock">
            <h1>Guees </h1>
            <p>Mix of tic-tac-toe game and memory game </p>
          </div>
      </div>
      </div>
    );
}

export default Guess;
