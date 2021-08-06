import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { classbn: props.className };
    this.style = {
      width: props.width,
      height: props.heigh,
    };
  }
  render() {
    return (
      <button
        style={this.style}
        onClick={this.props.onclick}
        className={this.state.classbn}
      >
        Add
      </button>
    );
  }
}

export default Button;
