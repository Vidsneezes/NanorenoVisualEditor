import React, { Component } from 'react';
import './CutBlock.css';

class CutBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      focus: false
    }
  }

  handleClick(){
    console.log("blue berries");
  }

  renderFocused(){
    return (
      <li className="cut-element" onClick={this.handleClick}>
        <div className={this.props.contentAlign}>
          <div>
            <input className="input-actorname" type="text" value="actorname" />
          </div>
          <div>
            <textarea className="textarea-dialogue" value="This is but a set back in the great war" />
          </div>
        </div>
      </li>
    );
  }

  renderUnfocused(){
    return (
      <li className="cut-element" onClick={this.handleClick}>
        <div className={this.props.contentAlign}>
          <h2>Actor Name</h2>
          <p>This is but a set back in the great land.</p>
        </div>
      </li>
    );
  }

  render() {
    return this.renderFocused();
  }
}

export default CutBlock;
