import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { scroller } from 'react-scroll';
import './App.css';
import About from './components/About';
import MainPage from './components/MainPage';
import Portfolio from './components/PortfolioS';
import Guess from './components/Guess';
import Surfer from './components/Surfer';
import Monster from './components/Monster';
import MissionX from './components/MissionX';
import Source from './components/Source';
import Resume from './components/Resume';
import Footer from './components/partials/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classMenu: 'beforeClickMenu',
      logoMain: 'beforeLogo',
      aboutLine: 'beforeAboutLine',
      aboutPage: 'beforeAboutPage',
      portLine: 'beforePortLine',
      portPage: 'beforePortPage',
      portGuessLine: 'beforeGuessLine',
      portGuessPage: 'beforeGuessPage',
      portSurferLine: 'beforeSurferLine',
      portSurferPage: 'beforeSurferPage',
      portMonsterLine: 'beforeMonsterLine',
      portMonsterPage: 'beforeMonsterPage',
      portMissionXLine: 'beforeMissionXLine',
      portMissionXPage: 'beforeMissionXPage',
      sourceLine: 'beforeSourceLine',
      sourcePage: 'beforeSourcePage',
      resumeLine: 'beforeResumeLine',
      resumePage: 'beforeResumePage',
      scaleAbout: {},
      scalePortfolio: {},
      scaleSource: {},
      scaleResume: {},
      mainFlag: true,
      workPointerGuess: {},
      workPointerSurf: {},
      workPointerMon: {},
      workPointerMiss: {},
    };

    this.handleMainListener = this.handleMainListener.bind(this);
    this.handlerAboutListener = this.handlerAboutListener.bind(this);
    this.handleAboutListenerRollBack = this.handleAboutListenerRollBack.bind(this);
    this.handlerPortfolioListener = this.handlerPortfolioListener.bind(this);
    this.handlePortfolioListenerRollBack = this.handlePortfolioListenerRollBack.bind(this);
    this.handlePortGuessListenerRollBack = this.handlePortGuessListenerRollBack.bind(this);
    this.handlePortSurfListenerRollBack = this.handlePortSurfListenerRollBack.bind(this);
    this.handlePortMonListenerRollBack = this.handlePortMonListenerRollBack.bind(this);
    this.handlePortMissListenerRollBack = this.handlePortMissListenerRollBack.bind(this);
    this.handlerPortGuessListener = this.handlerPortGuessListener.bind(this);
    this.handlerPortSurfListener = this.handlerPortSurfListener.bind(this);
    this.handlerPortMonListener = this.handlerPortMonListener.bind(this);
    this.handlerPortMissListener = this.handlerPortMissListener.bind(this);
    this.handlerSourceListener = this.handlerSourceListener.bind(this);
    this.handleSourceListenerRollBack = this.handleSourceListenerRollBack.bind(this);
    this.handleResumeListenerRollBack = this.handleResumeListenerRollBack.bind(this);
    this.handlerResumeListener = this.handlerResumeListener.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleMainListener(event) {
    event.preventDefault();
    this.state.mainFlag ? (
      this.setState({
        classMenu: 'afterClickMenu',
        logoMain: 'afterLogo',
        mainFlag: false,
    })
    ) : (
      this.setState({
        classMenu: 'beforeClickMenu',
        logoMain: 'beforeLogo',
        mainFlag: true,
    })
    );
  }

  async handlerAboutListener(event) {
    console.log(document.body.scrollHeight);
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        aboutLine: 'afterAboutLine',
        aboutPage: 'afterAboutPage',
        scaleAbout: {
          height: '225px',
          width: '225px',
        },
      });
      const domScroll = Scroll.animateScroll.scrollTo(document.body.scrollHeight);
    } catch(err) {
      console.log(err);
    }
  }

  async handlerPortfolioListener(event) {
    console.log(document.body.scrollHeight);
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        portLine: 'afterPortLine',
        portPage: 'afterPortPage',
        scalePortfolio: {
          height: '225px',
          width: '225px',
        },
      });
      const domScroll = Scroll.animateScroll.scrollTo(document.body.scrollHeight,
        {smooth: true});
    } catch(err) {
      console.log(err);
    }
  }

  async handlerPortGuessListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
      portGuessLine: 'afterGuessLine',
      portGuessPage: 'afterGuessPage',
      workPointerGuess: {
        backgroundColor: 'rgba(32,152,209,0.8)',
      },
    });
    const domScroll = Scroll.animateScroll.scrollTo(1100, { smooth: true });
    } catch(err) {
      console.log(err);
    }
  }

  async handlerPortSurfListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        portSurferLine: 'afterSurferLine',
        portSurferPage: 'afterSurferPage',
        workPointerSurf: {
          backgroundColor: 'rgba(32,152,209,0.8)',
        },
      });
      const domScroll = Scroll.animateScroll.scrollTo(1100, { smooth: true });
    } catch(err) {
      console.log(err);
    }
  }

  async handlerPortMonListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        portMonsterLine: 'afterMonsterLine',
        portMonsterPage: 'afterMonsterPage',
        workPointerMon: {
          backgroundColor: 'rgba(32,152,209,0.8)',
        },
      });
      const domScroll = Scroll.animateScroll.scrollTo(1100, { smooth: true });
    } catch(err) {
      console.log(err);
    }
  }

  async handlerPortMissListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        portMissionXLine: 'afterMissionXLine',
        portMissionXPage: 'afterMissionXPage',
        workPointerMiss: {
          backgroundColor: 'rgba(32,152,209,0.8)',
        },
      });
      const domScroll = Scroll.animateScroll.scrollTo(1150, { smooth: true });
    } catch (err) {
      console.log(err);
    }
  }

  async handlerSourceListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        sourceLine: 'afterSourceLine',
        sourcePage: 'afterSourcePage',
        scaleSource: {
          height: '225px',
          width: '225px',
        },
      });
      const domScroll = Scroll.animateScroll.scrollTo(1150, { smooth: true });
    } catch(err) {
      console.log(err);
    }
  }

  async handlerResumeListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        resumeLine: 'afterResumeLine',
        resumePage: 'afterResumePage',
        scaleResume: {
          height: '225px',
          width: '225px',
        },
      });
      const domScroll = Scroll.animateScroll.scrollTo(1150, { smooth: true });
    } catch(err) {
      console.log(err);
    }
  }

  handleAboutListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      aboutPage: 'beforeAboutPage',
      aboutLine: 'beforeAboutLine',
      scaleAbout: {},
    });
  }

  handlePortfolioListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portLine: 'beforePortLine',
      portPage: 'beforePortPage',
      scalePortfolio: {},
    });
  }

  handlePortGuessListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portGuessLine: 'beforeGuessLine',
      portGuessPage: 'beforeGuessPage',
      workPointerGuess: {},
    });
  }

  handlePortSurfListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portSurferLine: 'beforeSurferLine',
      portSurferPage: 'beforeSurferPage',
      workPointerSurf: {},
    });
  }

  handlePortMonListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portMonsterLine: 'beforeMonsterLine',
      portMonsterPage: 'beforeMonsterPage',
      workPointerMon: {},
    });
  }

  handlePortMissListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portMissionXLine: 'beforeMissionXLine',
      portMissionXPage: 'beforeMissionXPage',
      workPointerMiss: {},
    });
  }

  handleSourceListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      sourceLine: 'beforeSourceLine',
      sourcePage: 'beforeSourcePage',
      scaleSource: {},
    });
  }

  handleResumeListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      resumeLine: 'beforeResumeLine',
      resumePage: 'beforeResumePage',
      scaleResume: {},
    });
  }

  render() {
    return (
      <div className="Portfolio">
        <MainPage
          menuState={this.state.classMenu}
          logoMain={this.state.logoMain}
          top={this.state.top}
          scaleAbout={this.state.scaleAbout}
          scalePortfolio={this.state.scalePortfolio}
          scaleSource={this.state.scaleSource}
          scaleResume={this.state.scaleResume}
          handleMainListener={this.handleMainListener}
          handlerAboutListener={this.handlerAboutListener}
          handlerPortfolioListener={this.handlerPortfolioListener}
          handlerSourceListener={this.handlerSourceListener}
          handlerResumeListener={this.handlerResumeListener}
        />
        <About
          aboutLine={this.state.aboutLine}
          aboutPage={this.state.aboutPage}
          handleAboutListenerRollBack={this.handleAboutListenerRollBack}
        />
        <Portfolio
          portLine={this.state.portLine}
          portPage={this.state.portPage}
          workPointerGuess={this.state.workPointerGuess}
          workPointerSurf={this.state.workPointerSurf}
          workPointerMon={this.state.workPointerMon}
          workPointerMiss={this.state.workPointerMiss}
          handlePortfolioListenerRollBack={this.handlePortfolioListenerRollBack}
          handleWorksListener={this.handleWorksListener}
          handlerPortGuessListener={this.handlerPortGuessListener}
          handlerPortSurfListener={this.handlerPortSurfListener}
          handlerPortMonListener={this.handlerPortMonListener}
          handlerPortMissListener={this.handlerPortMissListener}
        />
        <Guess
          portGuessLine={this.state.portGuessLine}
          portGuessPage={this.state.portGuessPage}
          handlePortGuessListenerRollBack={this.handlePortGuessListenerRollBack}
        />
        <Surfer
          portSurferLine={this.state.portSurferLine}
          portSurferPage={this.state.portSurferPage}
          handlePortSurfListenerRollBack={this.handlePortSurfListenerRollBack}
        />
        <Monster
          portMonsterLine={this.state.portMonsterLine}
          portMonsterPage={this.state.portMonsterPage}
          handlePortMonListenerRollBack={this.handlePortMonListenerRollBack}
        />
        <MissionX
          portMissionXLine={this.state.portMissionXLine}
          portMissionXPage={this.state.portMissionXPage}
          handlePortMissListenerRollBack={this.handlePortMissListenerRollBack}
        />
        <Source
          sourceLine={this.state.sourceLine}
          sourcePage={this.state.sourcePage}
          handleSourceListenerRollBack={this.handleSourceListenerRollBack}
        />
        <Resume
          resumeLine={this.state.resumeLine}
          resumePage={this.state.resumePage}
          handleResumeListenerRollBack={this.handleResumeListenerRollBack}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
