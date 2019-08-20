import React, { Component } from "react";

class TitleInput extends Component {
  state = {};
  handleChange = e => {
      this.props.updateTitle(e.target.value)
      console.log(e.target.value)
  }
  render() {
    return (
      <div>
        <input
          type="text"
          id="title-input"
          placeholder="Title"
          onChange={this.handleChange}
          required
        />
      </div>
    );
  }
}

export default TitleInput;
