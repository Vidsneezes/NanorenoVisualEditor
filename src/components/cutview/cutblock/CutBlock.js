import React, { Component } from 'react';
import './CutBlock.css';

class CutBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.cutData
    }
    this.changeSide = this.changeSide.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  changeSide(){
    const newData = this.props.handleData(this.state.data.key);
    this.setState({
      data: newData
    });
  }

  handleInputChange() {

  }

  renderFocused(){
    return (
      <li className="cut-element" >
        <div className={"cut-content-"+this.state.data.side}>
          <div className="cut-meta">
            <input className="input-actorname" type="text" placeholder="actorname" value={this.state.data.skit}/>
            <input className="input-emotion" type="text" placeholder="emotion" value={this.state.data.emotion}/>
            <button className="button-side" onClick={this.changeSide}>{"<-->"}</button>
          </div>
          <div>
            <textarea className="textarea-dialogue" placeholder="dialogue goes here" value={this.state.data.text}/>
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
