import React, { Component } from 'react';
import ChaptersView from './components/chaptersview/ChaptersView.js';
import CutView from './components/cutview/CutView.js';
import CutBlockEditor from './components/cutview/cutblockeditor/CutBlockEditor.js'
import './App.css';
import DataJson from './CutData.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cutData: DataJson.data
    }
    this.handleData = this.handleData.bind(this);
  }

  handleData() {
    DataJson.data[0].side = "left";
    console.log(DataJson.data);
    this.setState({
      cutData: DataJson.data
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
