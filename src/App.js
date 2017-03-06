import React, { Component } from 'react';
import ChaptersView from './components/chaptersview/ChaptersView.js';
import CutView from './components/cutview/CutView.js';
import CutBlockEditor from './components/cutview/cutblockeditor/CutBlockEditor.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-ChapterView">
          <ChaptersView />
        </div>
        <div className="App-CutView">
          <CutView />
        </div>
      </div>
    );
  }
}

export default App;
