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
      totalCuts: 900,
    }
    this.handleSideChange = this.handleSideChange.bind(this);
    this.ExportData = this.ExportData.bind(this);
    this.AddCutBelow = this.AddCutBelow.bind(this);
    this.RemoveCurrentCut = this.RemoveCurrentCut.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.ImportData = this.ImportData.bind(this);
    this.OpenImportDialog = this.OpenImportDialog.bind(this);
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
      cutData: DataJson.data,
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
      cutData: DataJson.data
    });
  }

  OpenImportDialog() {
    this.importDataRef.DisplayBox();
  }

  ImportData() {
    var str = this.importDataRef.copyClipBoard();
    if(str.length == 0)
    {
      return;
    }
    var json = JSON.parse(str);
    var simpleData = json.map(function(data,index){
      var n = data.skit.split(" ");
      if(n.length == 1){
        n.push("undefined");
      }
      const dataN =  {
        actor: n[0],
        emotion: n[1],
        text: data.text,
        key:"vv"+index,
        side:data.direction
      }
      return dataN;
    });
    DataJson.data = simpleData;
    console.log(DataJson.data);
    this.setState({
      cutData: DataJson.data
    });
  }

  ExportData() {
    var simpleData = DataJson.data.map(function(data){
      const dataN = {
        skit: data.actor + " " + data.emotion,
        text: data.text,
        direction: data.side
      }
      return dataN;
    });
    var str = JSON.stringify(simpleData);
    this.setState({
      copyData: str
    });
    this.cutEditorRef.DisplayBox();
  }

  handleChange(event){
    this.setState({
      importText:event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-CutView">
         <CutBlockEditor ref={(el) => {this.cutEditorRef = el;}} mode={"export"} copyData={this.state.copyData}/>
         <CutBlockEditor ref={(el) => {this.importDataRef = el;}} mode={"import"} copyData={this.state.copyData} onClose={this.ImportData}/>
         <CutView cutData={this.state.cutData} 
                   handleSideChange={this.handleSideChange}
                   addCutBelow={this.AddCutBelow}
                   removeCurrentCut={this.RemoveCurrentCut}
                   handleDataChange={this.handleDataChange}
                   exportData={this.ExportData}
                   importData={this.OpenImportDialog}
                   />
        </div>
      </div>
    );
  }
}

export default App;
