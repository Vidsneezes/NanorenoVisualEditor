import React, { Component } from 'react';
import './CutBlock.css';

class CutBlock extends Component {
  handleClick(){
    console.log("blue berries");
  }

  render() {
    return (
      <li className="cut-element" onClick={this.handleClick}>
        <div className={this.props.contentAlign}>
          <h2>Actor Name</h2>
          <p>This is but a set back in the great land.</p>
        </div>
      </li>
    );
  }
}

export default CutBlock;
