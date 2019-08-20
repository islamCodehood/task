import React, { Component } from "react";

class SummaryInput extends Component {
  state = {};

  handleChange = e => this.props.updateSummary(e.target.value);

  render() {
    return (
      <div  className="input-wrapper">
        <textarea
          id="summary-input"
          className="input-style"
          name="summary"
          onChange={this.handleChange}
          placeholder="Summary"
          required
        />
      </div>
    );
  }
}

export default SummaryInput;
