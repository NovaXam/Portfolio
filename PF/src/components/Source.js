import React from 'react';
import Scroll from 'react-scroll';
import './Source.css';
import Sourcepage from '../assets/Sourcepage.jpg';
import buttonRead from '../assets/buttonRead.png';

const Element = Scroll.Element;

const Source = (props) => {
  return (
  <Element name="Source">
    <div className="sourceMainBlock" style={props.heightSource}>
      <div className={props.sourceLine}>
        <p>READ</p>
      </div>
      <div className={props.sourcePage}>
        <img id='source' src={buttonRead} alt="sourceBut" onClick={props.handleSourceListenerRollBack} />
        <div className="innerBlock">
          <div className="left">
            <img id='sourcePic' src={Sourcepage} alt="blockPic" />
          </div>
          <div className="right">
            <ul>
              <li><a href="http://whatpixel.com/grokking-algorithms-book-review/">@Grokking Algorithms
              </a> - awesome book to get you known basic algorithms by easy to understand language</li>
              <li><a href="http://freecomputerbooks.com/MySQL-Essentials.html">@MySQL 5 Essentials
              </a> - good helper with sequel DB, and especially MySQL. Enough deep level to start feel
              confident and make your own REQUESTS and JOINS.</li>
              <li><a href="http://shop.oreilly.com/product/9780596007126.do">@4 Head first design patterns
              </a> - recommend this book to those who are really curious in design patterns in Java. It allows
              to makes your application more reliable and your code clean.</li>
              <li><a href="https://blog.risingstack.com/">@RisingStack
              </a> - Source which saved my life couple of times. A lot of information about Node.js and Express</li>
              <li><a href="developer.mozilla.org/">@MDN
              </a> - Sort of bible for a front-end. MUST KNOW</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Element>
  );
};

export default Source;
