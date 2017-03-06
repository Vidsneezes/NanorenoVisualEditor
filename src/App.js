import React, { Component } from 'react';
import ChaptersView from './components/chaptersview/ChaptersView.js';
import CutView from './components/cutview/CutView.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChaptersView />
        <CutView />
      </div>
    );
  }
}

export default App;
