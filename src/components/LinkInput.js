import React, { Component } from "react";

class LinkInput extends Component {
  state = {};

  handleChange = e => this.props.updateLink(e.target.value);

  render() {
    return (
      <div className="input-wrapper">
        <input
          type="url"
          id="link-input"
          className="input-style"
          onChange={this.handleChange}
          placeholder="Link"
          required
        />
      </div>
    );
  }
}

export default LinkInput;
