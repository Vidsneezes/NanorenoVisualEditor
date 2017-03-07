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
    "key":"dfk",
    "side":"right"
  },
  {
    "skit": "SchoolgirlA",
    "emotion": "happy",
    "text": "Dialog number two",
    "key":"fd",
    "side":"left"
  },
  {
    "skit": "SchoolgirlB",
    "emotion": "worry",
    "text": "Dialog number three",
    "key":"eee",
    "side":"right"
  },
  {
    "skit": "SchoolgirlB",
    "emotion": "punchline",
    "text": "punchline",
    "key":"cc",
    "side":"left"
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cutData: sampleJson
    }
    this.handleData = this.handleData.bind(this);
  }

  handleData() {
    sampleJson[0].side = "left";
    console.log(sampleJson);
    this.setState({
      cutData: sampleJson
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-ChapterView">
          <ChaptersView />
        </div>
        <div className="App-CutView">
          <CutView cutData={this.state.cutData} handleData={this.handleData}/>
        </div>
      </div>
    );
  }
}

export default App;
