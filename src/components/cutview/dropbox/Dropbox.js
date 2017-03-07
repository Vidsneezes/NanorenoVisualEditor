import React, { Component } from 'react';

class Dropbox extends Component {

  render() {
    const list = this.props.list.map((valuem) =>
      <option key={valuem} value= {valuem}>{valuem}</option>
    );

    return (
      <select name={this.props.name} value={this.props.value} onChange={this.props.handleChange}>
          {list}
      </select>
    );
  }
}

export default Dropbox;
