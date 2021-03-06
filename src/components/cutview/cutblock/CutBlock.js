import React, { Component } from 'react';
import Dropbox from '../dropbox/Dropbox.js';
import './CutBlock.css';

const emotions = [
  "undefined",
  "neutral",
  "sad",
  "happy",
  "punchline",
  "worry",
  "mad",
  "madder",
  "maddest",
  "happier",
  "happiest",
  "super sad",
  "super angry",
  "super happy",
  "uncomfortable",
  "tire",
  "exhausted",
  "intrigued",
  "very intrigued",
  "loopy",
  "wacky",
  "interested",
  "guile",
  "StreetFighter",
  "welcoming",
  "lovey",
  "super lovey",
  "super duper lovey",
  "hentai",
  "hentai XXX",
  "happy for now"
]

class CutBlock extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: this.props.cutData.key
    }
    this.handleSideChange = this.handleSideChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddCutBelow = this.handleAddCutBelow.bind(this);
    this.handleRemoveCurrentCut = this.handleRemoveCurrentCut.bind(this);
    this.focusOnMe = this.focusOnMe.bind(this);
  }

  handleSideChange(){
    const newData = this.props.handleSideChange(this.state.key);
  }

  handleAddCutBelow(){
    this.props.addCutBelow(this.state.key);
  }

  handleRemoveCurrentCut(){
    this.props.removeCurrentCut(this.state.key);
  }

  handleChange(event) {
    this.props.handleDataChange(event.target.name,this.state.key,event.target.value);
  }

  focusOnMe(){
    this.refs.premium.scrollIntoView({behavior:"smooth"});
  }

  renderFocused(){
    return (
      <li ref="premium" className="cut-element" >
        <div className={"cut-content-"+this.props.cutData.side}>
          <div className="cut-meta">
            <input name="actor" className="<input-actor></input-actor>name" type="text" placeholder="actorname" value={this.props.cutData.actor} onChange={this.handleChange}/>
            <Dropbox name="emotion" className="dropbox-emotion" value={this.props.cutData.emotion} list={emotions} handleChange={this.handleChange}/>
            <button className="button-side" onClick={this.handleSideChange}>{"<-->"}</button>
          </div>
          <div>
            <textarea name="text" className="textarea-dialogue" placeholder="dialogue goes here" value={this.props.cutData.text} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="cut-addbutton">
          <button onClick={this.handleAddCutBelow}> Add Cut Below </button>
          <button onClick={this.handleRemoveCurrentCut}> Remove Cut </button>
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
