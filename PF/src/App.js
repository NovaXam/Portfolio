import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainPage from './components/MainPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classMenu: 'beforeClickMenu',
      logoMain: 'beforeLogo',
    };

    this.handleMainListener = this.handleMainListener.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  handleMainListener(event) {
    event.preventDefault();
    this.setState({
      classMenu: 'afterClickMenu',
      logoMain: 'afterLogo',
    });
  }

  render() {
    return (
      <div className="Portfolio">
        <MainPage
          menuState={this.state.classMenu}
          logoMain={this.state.logoMain}
          top={this.state.top}
          handleMainListener={this.handleMainListener}
        />
      </div>
    );
  }
}

export default App;
