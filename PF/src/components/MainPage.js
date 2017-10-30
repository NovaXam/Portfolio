import React from 'react';
import logo from '../assets/Icons/logo.png';
import about from '../assets/button_about.png';
import works from '../assets/button_work.png';
import read from '../assets/button_read.png';
import contact from '../assets/button_contact.png';
import './MainPage.css';
import red from '../assets/buttons_red.png';

const MainPage = (props) => {
  return (
    <main className='mainBlock'>
      <div id="logoBlock" className={props.logoMain}>
        <img id="logoMain" src={logo} alt="logo" onClick={props.handleMainListener} />
      </div>
      <div className={props.menuState}>
        <div id="linesMain" className='lines'>
          <p>MENU</p>
        </div>
        <div className='categories'>
          <ul id="catId">
            <li><img id="about" src={about} style={props.scaleAbout} alt="aboutHum" onClick={props.handlerAboutListener} /></li>
            <li> <img id="works" src={works} style={props.scalePortfolio} alt="worksHum" onClick={props.handlerPortfolioListener} /> </li>
            <li> <img id="read" src={read} style={props.scaleSource} alt="readHum" onClick={props.handlerSourceListener} /> </li>
            <li> <img id="info" src={contact} style={props.scaleResume} alt="infoHum" onClick={props.handlerResumeListener}/> </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
