import React, { Component } from 'react';
import './CutView.css';
import CutBlock from './cutblock/CutBlock.js'

class CutView extends Component {
  render() {
    var count = 0;
    const cuts = this.props.cutData.map((data)=>
      <CutBlock key={data.key} 
                cutData={data} 
                handleSideChange={this.props.handleSideChange} 
                addCutBelow={this.props.addCutBelow}
                removeCurrentCut={this.props.removeCurrentCut}
                handleDataChange={this.props.handleDataChange}
                />
    );
    return (
      <div className="c-content">
        <div className="c-title">
          <h2>Cuts Editor</h2>
          <button onClick={this.props.exportData}>Export</button>
        </div>
        <ul className="c-list">
          {cuts}
        </ul>
      </div>
    );
  }
}

export default CutView;
