import React from 'react';
import './Monster.css';
import Monsterpage from '../assets/Portfolio/Monster_page.png';
import iconGit from '../assets/arrows.png';
import buttonMonster from '../assets/buttonFolio.png';
import iconsGit from '../assets/Icons/iconsGH.png';
import iconsHeroku from '../assets/Icons/iconsHeroku.png';

const Monster = (props) => {
  return (
    <div className="portMonMainBlock">
      <div className={props.portMonsterLine}>
        <p>M-MONSTER</p>
        </div>
        <div className={props.portMonsterPage}>
          <img id='monster' src={buttonMonster} onClick={props.handlePortMonListenerRollBack} />
          <div className="innerBlock">
            <div className="left">
              <div className="mainPic"><img id='mmPicture' src={Monsterpage} /></div>
              <div className="icons">
                <a href="https://github.com/MistyMen/musicMonster" target="blank"><img id="iconGit" src={iconsGit} /></a>
                <a href="https://musicmonster.herokuapp.com/" target="blank"><img id="iconHer" src={iconsHeroku} /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>It is a playlist manager, that allow you search and manage
                   your favorite artists and albums using Spotify API and save
                   them to your profile on a web-site. You also can play a clip
                   and moreover control spotify right from your browser if you
                   have the application.
                </p>
              </div>
              <div className="tech">
                <h1>TECHNOLOGIES</h1>
                <p>Html5, Css3, Javascript(ES6), Express, Postgres, GitHub, React Node.js, SpotifyAPI</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Monster;
