import React, { Component } from 'react';
import './CutBlock.css';

class CutBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      actor: this.props.cutData.actor,
      emotion: this.props.cutData.emotion,
      text: this.props.cutData.text,
      side: this.props.cutData.side,
      key: this.props.cutData.key
    }
    this.handleSideChange = this.handleSideChange.bind(this);
    this.handleActorNameChange = this.handleActorNameChange.bind(this);
  }

  handleSideChange(){
    const newData = this.props.handleSideChange(this.state.key);
    this.setState({
      side: newData.side
    });
  }

  handleActorNameChange(event) {
    this.setState({
      actor: event.target.value
    })
  }

  renderFocused(){
    return (
      <li className="cut-element" >
        <div className={"cut-content-"+this.state.side}>
          <div className="cut-meta">
            <input className="input-actorname" type="text" placeholder="actorname" value={this.state.actor} onChange={this.handleActorNameChange}/>
            <input className="input-emotion" type="text" placeholder="emotion" value={this.state.emotion}/>
            <button className="button-side" onClick={this.handleSideChange}>{"<-->"}</button>
          </div>
          <div>
            <textarea className="textarea-dialogue" placeholder="dialogue goes here" value={this.state.text}/>
          </div>
        </div>
      </li>
    );
  }

  renderUnfocused(){
    return (
      <li className="cut-element">
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
