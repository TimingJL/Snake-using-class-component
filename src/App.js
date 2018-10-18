import React, { Component } from 'react';
import SnakeGame from 'containers/SnakeGame';
import GithubCorner from 'react-github-corner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnakeGame />
        <GithubCorner
          size={60}
          octoColor={'black'}
          bannerColor={'white'}
          href="https://timingjl.github.io/Snake"
        />
      </div>
    );
  }
}

export default App;
