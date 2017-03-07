import React, { Component } from 'react';

class Dropbox extends Component {
  constructor(props){
    super(props);
    this.state = {
        value: this.props.list[0]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
      this.setState({
          value: event.target.value
      });
  }

  render() {
    const list = this.props.list.map((valuem) =>
      <option key={valuem} value= {valuem}>{valuem}</option>
    );

    return (
      <select value={this.state.value} onChange={this.handleChange}>
          {list}
      </select>
    );
  }
}

export default Dropbox;
