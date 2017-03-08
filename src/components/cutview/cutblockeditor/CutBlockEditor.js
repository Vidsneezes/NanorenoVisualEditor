import React, { Component } from 'react';
import './CutBlockEditor.css';

class CutBlockEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
      text: ""
    }
    this.AutoSelectTextArea = this.AutoSelectTextArea.bind(this);
    this.HidBox = this.HidBox.bind(this);
    this.DisplayBox = this.DisplayBox.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.copyClipBoard = this.copyClipBoard.bind(this);
  }

  AutoSelectTextArea() {
    this.refs.copyclipboard.select();
  }

  handleChange(event){
    this.setState({
      text:event.target.value
    });
  }

  DisplayBox(){
    this.setState({
      visible: true
    });
  }

  HidBox(){
    this.setState({
      visible: false
    })
    if(this.props.onClose)
    {
      this.props.onClose();
    }
  }

  renderExport() {
    return  (<span>
        <div className="overlay"></div>
        <div className="modal-export">
          <h2>Export</h2>
          <button onClick={this.HidBox}>close</button><br></br>
          <textarea ref="copyclipboard" className="copyclipboard" value={this.props.copyData} readOnly="readonly" onFocus={this.AutoSelectTextArea}/>
        </div>
        </span>);
  }

  
  renderImport() {
    return  (<span>
        <div className="overlay"></div>
        <div className="modal-import">
          <h2>Import</h2>
          <button onClick={this.HidBox}>continue</button><br></br>
          <textarea ref="copyclipboard" className="copyclipboard" value={this.state.text} onChange={this.handleChange} />
        </div>
        </span>);
  }

  copyClipBoard() {
    return this.refs.copyclipboard.value;
  }

  render() {
    let displayExport;
    if(this.state.visible){
      if(this.props.mode === "export"){
        displayExport = this.renderExport();
      }else{
        displayExport = this.renderImport();
      }
    }
    return (
      <div >
        {displayExport}
      </div>
    );
  }
}

export default CutBlockEditor;