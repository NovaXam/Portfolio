import React from 'react';
import logo from '../assets/pepsi.png';
import about from '../assets/button_about.png';
import works from '../assets/button_work.png';
import read from '../assets/button_read.png';
import contact from '../assets/button_contact.png';
import './MainPage.css';

const MainPage = (props) => {
  return (
    <main className='mainBlock'>
      <div className={props.logoMain}>
        <img src={logo} onClick={props.handleMainListener} />
      </div>
      <div className={props.menuState}>
        <div className='lines'>
          <p>MENU</p>
        </div>
        <div className='categories'>
          <ul>
            <li><img id="about" src={about} style={props.scaleAbout} onClick={props.handlerAboutListener} /></li>
            <li> <img src={works} style={props.scalePortfolio} onClick={props.handlerPortfolioListener} /> </li>
            <li> <img src={read} style={props.scaleSource} onClick={props.handlerSourceListener} /> </li>
            <li> <img src={contact} style={props.scaleResume} onClick={props.handlerResumeListener}/> </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
