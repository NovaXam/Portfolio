import React from 'react';
import logo from '../assets/pepsi.png';
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
            <li><img id="about" src={logo} style={props.scaleAbout} onClick={props.handlerAboutListener} /></li>
            <li> <img src={logo} style={props.scalePortfolio} onClick={props.handlerPortfolioListener} /> </li>
            <li> <img src={logo} style={props.scaleSource} onClick={props.handlerSourceListener} /> </li>
            <li> <img src={logo} style={props.scaleResume} onClick={props.handlerResumeListener}/> </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
