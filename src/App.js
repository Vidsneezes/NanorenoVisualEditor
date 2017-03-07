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

  handleData(key) {
    let newData = {};
    for(var i =0; i < DataJson.data.length;i++){
      if(DataJson.data[i].key === key){
        if(DataJson.data[i].side === "right"){
          DataJson.data[i].side = "left";
        }else if(DataJson.data[i].side === "left"){
          DataJson.data[i].side = "right";
        } 
        newData = DataJson.data[i];
        break;
      }
    }
    this.setState({
      cutData: DataJson.data
    });
    return newData;
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
