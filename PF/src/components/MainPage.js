import React from 'react';
import logo from '../assets/pepsi.png';
import './MainPage.css';

const MainPage = (props) => {
  console.log(props.menuState);
  console.log(props.logoMain);
  console.log(props.top);
  return (
    <main className='mainBlock'>
      <div className={props.logoMain} onClick={props.handleMainListener}>
        <img src={logo} />
      </div>
      <div className={props.menuState}>
        <div className='lines'></div>
        <div className='categories'>
          <ul>
            <li> <img src={logo} /> </li>
            <li> <img src={logo} /> </li>
            <li> <img src={logo} /> </li>
            <li> <img src={logo} /> </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
