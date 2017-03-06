import React, { Component } from 'react';
import './CutBlockEditor.css';

class CutBlockEditor extends Component {
  render() {
    return (
      <div >
        <div className="overlay"></div>
        <div className="modal">
            <button>close</button>
            <h1>Edit Cut</h1>
        </div>
      </div>
    );
  }
}

export default CutBlockEditor;