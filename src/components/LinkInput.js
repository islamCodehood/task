import React from "react";

const LinkInput = props => {
  const handleChange = e => props.updateLink(e.target.value);

    return (
      <div className="input-wrapper">
        <input
          type="url"
          id="link-input"
          className="input-style"
          onChange={handleChange}
          placeholder="Link"
          required
        />
      </div>
    );

}

export default LinkInput;
