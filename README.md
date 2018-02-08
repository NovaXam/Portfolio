# Project Overview

[www.novaxam.com](http://novaxam.com)

***

## Project Description and Goals

Site was build as a platform to publish my personal web-development projects, 
enable people easily refer to me on the internet and collaborate.
One of the main principal laying on the ground of this project is simplicity and
unusual design solitions.
The navigation counts only four parts. \About and \Works are intuitively predictable
relative to their content. The initial idea about \Read is to keep posted interesting
topics from web. But in the future I would like to transform this part of the site
into a list of my own publications.
Site serves both an idea to introduce an author's professional profile,
and also to reviel his personality.

## Technologies

> Architecture of the app built on React. Following good practice, all changes of the app are rendered in one base stateful component.
> All visual solutions include effects are built, customized and stored in CSS files.

***

## Installation

* Fork it to your github repo.
* Clone repo to your local machine.
* Verify and install necessary modules from packeage.json file.
* At this stage everything should be set up.
* Type npm start command into your terminal.
* Web app should be opened into the localhost in your browser

***

## Wireframes

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/mockUps.JPG "MockUps")

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/main_screen.png "main page")

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/about.png "about page")

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/menu.png "menu page")

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/portfolio.png "portfolio page")

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/project_page.png "project page")

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/read_page.png "read page")

![alt text](https://github.com/NovaXam/Portfolio/blob/master/source_materials/contact_page.png "contact page")

***

## User story

> User comes to the site. The first impression should be slightly confusing about too much white 
> space. But he/she quickly catches up with the next step: to hover or click logo at the middle of 
> the screen. Probably user will decide to keep eyes on it little bit to figure out the 
> negative space trick. (captital M and Space dog face with glasses).
> After clicked on logo user observes a  main menu smoothely sliding from above in shape of burger.
> Probably it wouldn't be so obvious but the real burger shape of main menu is a funny solution 
> which I found have been working on visual part of the project.
> At this stage a minor part of the users would decide to click the logo again and will be praised.
> Main menu would smoothly melt up.
> After got aquianted with main interface feature user becomes more confident to navigate on the 
> site cause there is no confusing part there anymore.

___

## Project Managment

MVP
* Creating a timescope of the project
* Elaborating an original concept
* Visualizing a solution
* Testing a vasual solution
* Making up a final UI
* Creating a code backbone structure of the project
* Writing tests for small components
* Gathering small components into modules
* Making a alpha-testing of assembled project 
* Creating design elements
* Filling content on the pages 

Version 1.001 
* Making a responsive design
* Making a beta-testing

Version 1.002
* Refactore a component's structure
* Improve UX by incorporate css-preprocessor / bootstrap   

***

## Functional stages of the project

Stage | Priority | Estimated time, h | Invested time, h
--- | --- | --- | --- 
`Planning` | `H` | `8` | `12`
`UX` | `H` | `16` | `16` 
`Code base` | `H`| `40` | `52`
`Tests` | `H` | `16` | `16`
`Design` | `H` | `24` | `24`
`Responsive` | `L` | `16` | `16`
**Total** |  | **120** | **136**

___

## Code snippet
```
// PROPS FROM STATLESS COMPONENT FIRED BY EVENT

 async handlerPortMonListener(event) {
    try {
      const prev = await event.preventDefault();
      const state = await this.setState({
        portMonsterLine: 'afterMonsterLine',
        portMonsterPage: 'afterMonsterPage',
        workPointerMon: {
          backgroundColor: 'rgba(32,152,209,0.8)',
          color: "white"
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

// MAIN COMPOMENT RENDER
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
          workPointerTweedr={this.state.workPointerTweedr}
          handlePortfolioListenerRollBack={this.handlePortfolioListenerRollBack}
          handleWorksListener={this.handleWorksListener}
          handlerPortGuessListener={this.handlerPortGuessListener}
          handlerPortSurfListener={this.handlerPortSurfListener}
          handlerPortMonListener={this.handlerPortMonListener}
          handlerPortMissListener={this.handlerPortMissListener}
          handlerPortTweedListener={this.handlerPortTweedListener}
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
        <Tweedr
          portTweedrLine={this.state.portTweedrLine}
          portTweedrPage={this.state.portTweedrPage}
          heightTweedr={this.state.heightTweedr}
          handlePortTweedrListenerRollBack={this.handlePortTweedrListenerRollBack}
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

```

