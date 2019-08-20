import React, { Component } from "react";

class LinkInput extends Component {
  state = {};

  handleChange = e => this.props.updateLink(e.target.value)

  render() {
    return (
      <div>
        <input type="url" id="link-input" onChange={this.handleChange} placeholder="Link" required />
      </div>
    );
  }
}

export default LinkInput;
