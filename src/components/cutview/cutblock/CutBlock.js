import React, { Component } from 'react';
import './CutBlock.css';

class CutBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      focus: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleData();
  }

  renderFocused(){
    return (
      <li className="cut-element" onClick={this.handleClick}>
        <div className={"cut-content-"+this.props.cutData.side}>
          <div className="cut-meta">
            <input className="input-actorname" type="text" placeholder="actorname" value={this.props.cutData.skit}/>
            <input className="input-emotion" type="text" placeholder="emotion" value={this.props.cutData.emotion}/>
          </div>
          <div>
            <textarea className="textarea-dialogue" value="This is but a set back in the great war" placeholder="dialogue goes here" value={this.props.cutData.text}/>
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
