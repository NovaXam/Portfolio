import React, { Component } from 'react';
import Scroll from 'react-scroll';
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

const scroller = Scroll.scroller;

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
      scaleAboutRed: {},
      scalePortfolio: {},
      scaleSource: {},
      scaleResume: {},
      mainFlag: true,
      workPointerGuess: {},
      workPointerSurf: {},
      workPointerMon: {},
      workPointerMiss: {},
      height: { height: '0px' },
      heightAbout: {
        height: '0px',
        marginBottom: '0px',
      },
      heightGuess: {
        height: '0px',
        transition: 'height 2s',
      },
      heightSurfer: {
        height: '0px',
        transition: 'height 2s',
      },
      heightMonster: {
        height: '0px',
        transition: 'height 2s',
      },
      heightMissionX: {
        height: '0px',
        transition: 'height 2s',
      },
      heightSource: {
        height: '0px',
        transition: 'height 2s',
      },
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
    try {
      const prev = await event.preventDefault();
      const stateClass = await this.setState({
        aboutLine: 'afterAboutLine',
        aboutPage: 'afterAboutPage',
      });
      if(window.screen.width <= 500) {
        this.setState({
          scaleAbout: {
            height: '100px',
            width: 'auto',
          },
          heightAbout: {
            height: '625px',
            marginBottom: '0px',
            transition: 'height 2s, margin-bottom 2s',
          },
        });
      } else {
        this.setState({
          scaleAbout: {
            height: '250px',
            width: '250px',
          },
          heightAbout: {
            height: '500px',
            marginBottom: '57px',
            transition: 'height 2s, margin-bottom 2s',
          },
        });
      }
      scroller.scrollTo('About', {
        smooth: true,
      });
    } catch(err) {
      console.log(err);
    }
  }

  async handlerPortfolioListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        portLine: 'afterPortLine',
        portPage: 'afterPortPage',
      });
      if(window.screen.width <= 500) {
        this.setState({
          scalePortfolio: {
            height: '100px',
            width: 'auto',
          },
          height: {
            height: '300px',
            marginBottom: '15px',
            transition: 'height 2s, margin-bottom 2s',
          },
        });
      } else {
        this.setState({
          scalePortfolio: {
            height: '250px',
            width: '250px',
        },
          height: {
            height: '600px',
            transition: 'height 2s',
        },
      });
    }
      scroller.scrollTo('Portfolio', {
        smooth: true,
      });
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
      if(window.screen.width <= 500) {
        this.setState({
          heightGuess: {
            height: '735px',
            transition: 'height 2s',
          },
        });
      } else {
        this.setState({
          heightGuess: {
            height: '675px',
            transition: 'height 2s',
          },
        });
      }
    scroller.scrollTo('Guess', {
        smooth: true,
      });
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
      if(window.screen.width <= 500) {
        this.setState({
          heightSurfer: {
            height: '695px',
            transition: 'height 2s',
          },
        });
      } else {
        this.setState({
          heightSurfer: {
            height: '675px',
            transition: 'height 2s',
          },
        });
      }
      scroller.scrollTo('Surfer', {
        smooth: true,
      });
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
      if(window.screen.width <= 500) {
        this.setState({
          heightMonster: {
            height: '710px',
            transition: 'height 2s',
          },
        });
      } else {
        this.setState({
          heightMonster: {
            height: '675px',
            transition: 'height 2s',
          },
        });
      }
       scroller.scrollTo('Monster', {
        smooth: true,
      });
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
      if(window.screen.width <= 500) {
        this.setState({
          heightMissionX: {
            height: '750px',
            transition: 'height 2s',
          },
        });
      } else {
        this.setState({
          heightMissionX: {
            height: '675px',
            transition: 'height 2s',
          },
        });
      }
      scroller.scrollTo('MissionX', {
        smooth: true,
      });
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
        });
      if(window.screen.width <= 500) {
        this.setState({
          scaleSource: {
            height: '100px',
            width: 'auto',
          },
          heightSource: {
            height: '775px',
            transition: 'height 2s',
            marginBottom: '35px',
        },
        });
      } else {
        this.setState({
          scaleSource: {
            height: '250px',
            width: '250px',
        },
          heightSource: {
            height: '600px',
            transition: 'height 2s',
        },
      });
    }
      scroller.scrollTo('Source', {
        smooth: true,
      });
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
      });
      if(window.screen.width <= 500) {
        this.setState({
          scaleResume: {
            height: '100px',
            width: 'auto',
          },
        });
      } else {
        this.setState({
          scaleResume: {
            height: '250px',
            width: '250px',
          },
        });
      }
      scroller.scrollTo('Resume', {
        smooth: true,
      });
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
      scaleAboutRed: {},
      heightAbout: {
          height: '0px',
          marginBottom: '0px',
          transition: 'height 2s, margin-bottom 2s',
        },
    });
  }

  handlePortfolioListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portLine: 'beforePortLine',
      portPage: 'beforePortPage',
      scalePortfolio: {},
      height: {
        height : '0px',
        transition: 'height 2s',
      },
    });
  }

  handlePortGuessListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portGuessLine: 'beforeGuessLine',
      portGuessPage: 'beforeGuessPage',
      workPointerGuess: {},
      heightGuess: {
        height: '0px',
        transition: 'height 2s',
      },
    });
  }

  handlePortSurfListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portSurferLine: 'beforeSurferLine',
      portSurferPage: 'beforeSurferPage',
      workPointerSurf: {},
      heightSurfer: {
        height: '0px',
        transition: 'height 2s',
      },
    });
  }

  handlePortMonListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portMonsterLine: 'beforeMonsterLine',
      portMonsterPage: 'beforeMonsterPage',
      workPointerMon: {},
      heightMonster: {
        height: '0px',
        transition: 'height 2s',
      },
    });
  }

  handlePortMissListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      portMissionXLine: 'beforeMissionXLine',
      portMissionXPage: 'beforeMissionXPage',
      workPointerMiss: {},
      heightMissionX: {
        height: '0px',
        transition: 'height 2s',
      },
    });
  }

  handleSourceListenerRollBack(event) {
    event.preventDefault();
    this.setState({
      sourceLine: 'beforeSourceLine',
      sourcePage: 'beforeSourcePage',
      scaleSource: {},
      heightSource: {
        height: '0px',
        transition: 'height 2s',
      },
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
          scaleAboutRed={this.state.scaleAboutRed}
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
          heightAbout={this.state.heightAbout}
          handleAboutListenerRollBack={this.handleAboutListenerRollBack}
        />
        <Portfolio
          height={this.state.height}
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
          heightGuess={this.state.heightGuess}
          handlePortGuessListenerRollBack={this.handlePortGuessListenerRollBack}
        />
        <Surfer
          portSurferLine={this.state.portSurferLine}
          portSurferPage={this.state.portSurferPage}
          heightSurfer={this.state.heightSurfer}
          handlePortSurfListenerRollBack={this.handlePortSurfListenerRollBack}
        />
        <Monster
          portMonsterLine={this.state.portMonsterLine}
          portMonsterPage={this.state.portMonsterPage}
          heightMonster={this.state.heightMonster}
          handlePortMonListenerRollBack={this.handlePortMonListenerRollBack}
        />
        <MissionX
          portMissionXLine={this.state.portMissionXLine}
          portMissionXPage={this.state.portMissionXPage}
          heightMissionX={this.state.heightMissionX}
          handlePortMissListenerRollBack={this.handlePortMissListenerRollBack}
        />
        <Source
          sourceLine={this.state.sourceLine}
          sourcePage={this.state.sourcePage}
          heightSource={this.state.heightSource}
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
