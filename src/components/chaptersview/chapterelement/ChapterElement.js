import React, { Component } from 'react';
import './ChapterElement.css';

class ChapterElement extends Component {
  handleClick(){
    console.log("red berries");
  }

  render() {
    return (
      <li className="ch-element" onClick={this.handleClick}>
          {this.props.chapterName}
      </li>
    );
  }
}

export default ChapterElement;
