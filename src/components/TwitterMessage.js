import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { value: "" };
  }

  handleChange = e => {
    // console.log(e.target.value)
    // console.log(this.props.maxChars);
    this.setState(
      {
        value: e.target.value
      }
      // () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <div>
          Characters Remaining:
          <span style={{ color: "green" }}>
            {this.props.maxChars - this.state.value.length}
          </span>
        </div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default TwitterMessage;
