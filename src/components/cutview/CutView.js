import React, { Component } from 'react';
import './CutView.css';
import CutBlock from './cutblock/CutBlock.js'

class CutView extends Component {
  render() {
    return (
      <div className="c-content">
        <div className="c-title">
          <h2>Cuts</h2>
        </div>
        <ul className="c-list">
          <CutBlock contentAlign="cut-content-left"/>
          <CutBlock contentAlign="cut-content-left"/>
          <CutBlock contentAlign="cut-content-right"/>
          <CutBlock contentAlign="cut-content-right"/>
          <CutBlock contentAlign="cut-content-left"/>
          <CutBlock contentAlign="cut-content-right"/>
        </ul>
      </div>
    );
  }
}

export default CutView;
