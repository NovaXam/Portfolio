import React from 'react';
import Scroll from 'react-scroll';
import './Monster.css';
import Monsterpage from '../assets/Portfolio/Monster_page.png';
import buttonMonster from '../assets/buttonFolio.png';
import iconsGit from '../assets/Icons/iconsGH.png';
import iconsHeroku from '../assets/Icons/iconsHeroku.png';

const Element = Scroll.Element;

const Monster = (props) => {
  return (
    <Element name="Monster">
      <div className="portMonMainBlock" style={props.heightMonster}>
        <div className={props.portMonsterLine}>
          <p>M-MONSTER</p>
        </div>
        <div className={props.portMonsterPage}>
          <img id='monster' src={buttonMonster} alt="monsterBut" onClick={props.handlePortMonListenerRollBack} />
          <div className="innerBlock">
            <div className="left">
              <div className="mainPic"><img id="mmPicture" src={Monsterpage} alt="monsterPic" /></div>
              <div className="icons">
                <a href="https://github.com/MistyMen/musicMonster" target="blank"><img id="iconGit" src={iconsGit} alt="linkToGitMon" /></a>
                <a href="https://musicmonster.herokuapp.com/" target="blank"><img id="iconHer" src={iconsHeroku} alt="linkToherMon" /></a>
              </div>
            </div>
            <div className="right">
              <div className="descript">
                <h1>DESCRIPTION</h1>
                <p>"Music Monster" is a playlist manager, that allows you to search and manage
                     your favorite artists and albums using Spotify API and save
                     them to your profile. You can also play a clip and control Spotify
                     right from your browser.
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
    </Element>
  );
};

export default Monster;
