import React, { Component } from 'react';
import './CutView.css';
import CutBlock from './cutblock/CutBlock.js'

class CutView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var count = 0;
    const cuts = this.props.cutData.map((data)=>
      <CutBlock key={data.key} cutData={data} handleSideChange={this.props.handleSideChange}/>
    );

    return (
      <div className="c-content">
        <div className="c-title">
          <h2>Cuts</h2>
        </div>
        <ul className="c-list">
          {cuts}
        </ul>
      </div>
    );
  }
}

export default CutView;
