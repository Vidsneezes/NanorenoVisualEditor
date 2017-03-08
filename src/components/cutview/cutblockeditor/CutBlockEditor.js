import React, { Component } from 'react';
import './CutBlockEditor.css';

class CutBlockEditor extends Component {
  render() {
    return (
      <div >
        <div className="overlay"></div>
        <div className="modal">
            <button>close</button>
            <textarea ref="copyclipboard" className="copyclipboard" value={this.state.copyData} readOnly="readonly" onFocus={this.AutoSelectTextArea}/>
        </div>
      </div>
    );
  }
}

export default CutBlockEditor;