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
          <ul>
            <li><div>1</div></li>
            <li><div>2</div></li>
            <li><div>3</div></li>
            <li><div>4</div></li>
          </ul>
        </div>
        <div className='categories'>
          <ul>
            <li> <img src={logo} style={props.scaleAbout} onClick={props.handlerAboutListener} /> </li>
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
