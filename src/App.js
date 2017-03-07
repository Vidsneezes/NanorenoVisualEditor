import React, { Component } from 'react';
import ChaptersView from './components/chaptersview/ChaptersView.js';
import CutView from './components/cutview/CutView.js';
import CutBlockEditor from './components/cutview/cutblockeditor/CutBlockEditor.js'
import './App.css';

const sampleJson = [
  {
    "skit": "SchoolgirlA",
    "emotion": "sad",
    "text": "Dialog number one",
    "key":"dfk"
  },
  {
    "skit": "SchoolgirlA",
    "emotion": "happy",
    "text": "Dialog number two",
    "key":"fd"
  },
  {
    "skit": "SchoolgirlB",
    "emotion": "worry",
    "text": "Dialog number three",
    "key":"eee"
  },
  {
    "skit": "SchoolgirlB",
    "emotion": "punchline",
    "text": "punchline",
    "key":"cc"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-ChapterView">
          <ChaptersView />
        </div>
        <div className="App-CutView">
          <CutView cutData={sampleJson}/>
        </div>
      </div>
    );
  }
}

export default App;
