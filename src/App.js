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
      cutData: DataJson.data,
      copyData: "",
      totalCuts: 900
    }
    this.handleSideChange = this.handleSideChange.bind(this);
    this.ExportData = this.ExportData.bind(this);
    this.AutoSelectTextArea = this.AutoSelectTextArea.bind(this);
    this.AddCutBelow = this.AddCutBelow.bind(this);
    this.RemoveCurrentCut = this.RemoveCurrentCut.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleSideChange(key) {
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
  }

  handleDataChange(property,key,newValue){
    let newData = {};
    for(var i =0; i < DataJson.data.length;i++){
      if(DataJson.data[i].key === key){
        DataJson.data[i][property] = newValue;
        newData = DataJson.data[i];
        break;
      }
    }

    this.setState({
      cutData: DataJson.data
    });
  }

  AddCutBelow(key) {
    let keyIndex = -1;
    for(var i =0; i < DataJson.data.length;i++){
      if(DataJson.data[i].key === key){
        keyIndex = i;
        break;
      }
    }
    if(keyIndex === -1){
      return;
    }
    const newTotalCuts = this.state.totalCuts + 1;
    const defaultData =   {
      "actor": "SchoolgirlA",
      "emotion": "sad",
      "text": "Dialog number one",
      "key":"dfk" + newTotalCuts,
      "side":"right"
    };
    DataJson.data.splice(keyIndex+1,0,defaultData);
    this.setState({
      cutDate: DataJson.data,
      totalCuts: newTotalCuts
    });
  }

  RemoveCurrentCut(key){
    let keyIndex = -1;
    for(var i =0; i < DataJson.data.length;i++){
      if(DataJson.data[i].key === key){
        keyIndex = i;
        break;
      }
    }
    if(keyIndex === -1){
      return;
    }
    DataJson.data.splice(keyIndex,1);
    this.setState({
      cutDate: DataJson.data
    });
  }

  ExportData() {
    var simpleData = DataJson.data.map(function(data){
      const dataN = {
        skit: data.actor + " " + data.emotion,
        text: data.text
      }
      return dataN;
    });
    var str = JSON.stringify(simpleData);
    this.setState({
      copyData: str
    });
  }

  AutoSelectTextArea() {
    this.refs.copyclipboard.select();
  }

  render() {
    return (
      <div className="App">
        <div className="App-CutView">
         <CutView cutData={this.state.cutData} 
                   handleSideChange={this.handleSideChange}
                   addCutBelow={this.AddCutBelow}
                   removeCurrentCut={this.RemoveCurrentCut}
                   handleDataChange={this.handleDataChange}
                   exportData={this.ExportData}
                   />
        </div>
      </div>
    );
  }
}

export default App;
