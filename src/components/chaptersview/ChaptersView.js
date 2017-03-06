import React, { Component } from 'react';
import ChapterElement from './chapterelement/ChapterElement.js';
import './ChaptersView.css';

class ChaptersView extends Component {
  render() {
    return (
      <div className="cv-content">
        <div className="cv-title">
          <h2>Chapters</h2>
        </div>
        <ul className="cv-content-list">
          <ChapterElement chapterName="Rise One" />
          <ChapterElement chapterName="Evil Be on Done" />
          <ChapterElement chapterName="Clash of river" />
          <ChapterElement chapterName="Clash of river alt route 1" />
        </ul>
      </div>
    );
  }
}

export default ChaptersView;
