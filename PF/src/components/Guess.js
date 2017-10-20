import React from 'react';
import './Guess.css';

const Guess = (props) => {
  return (
      <div>
        <div className={props.portGuessLine}></div>
        <div className={props.portGuessPage}>
          <button id='guess' onClick={props.handlePortGuessListenerRollBack}><i className="fa fa-power-off"></i></button>
          <h1>Guees </h1>
          <p>Mix of tic-tac-toe game and memory game </p>
      </div>
      </div>
    );
}

export default Guess;
