import React, { Component } from 'react';
import './CutBlockEditor.css';

class CutBlockEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
    this.AutoSelectTextArea = this.AutoSelectTextArea.bind(this);
    this.HidBox = this.HidBox.bind(this);
    this.DisplayBox = this.DisplayBox.bind(this);
  }

  AutoSelectTextArea() {
    this.refs.copyclipboard.select();
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
  }

  render() {
    let displayExport;
    if(this.state.visible){
      displayExport = (
        <span>
        <div className="overlay"></div>
        <div className="modal">
            <button onClick={this.HidBox}>close</button><br></br>
            <textarea ref="copyclipboard" className="copyclipboard" value={this.props.copyData} readOnly="readonly" onFocus={this.AutoSelectTextArea}/>
        </div>
        </span>
      );
    }


    return (
      <div >
        {displayExport}
      </div>
    );
  }
}

export default CutBlockEditor;