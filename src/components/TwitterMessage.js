import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      remainingChars: 140,
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      remainingChars: 140 - event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
               onChange={event => this.handleChange(event)}
               value={this.state.message} />
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
