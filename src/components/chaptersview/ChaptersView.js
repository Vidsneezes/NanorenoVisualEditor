import React, { Component } from 'react';
import './ChaptersView.css';

class ChaptersView extends Component {
  render() {
    return (
      <div className="cv-content">
        <div className="cv-title">
          <h2>Chapters</h2>
        </div>
        <ul className="cv-content-list">
          <li>A Chest Turns To ruin.</li>
          <li>Fire sweeps the nation.</li>
          <li>Lead leads on.</li>
          <li>Crush Fire.</li>
        </ul>
      </div>
    );
  }
}

export default ChaptersView;
