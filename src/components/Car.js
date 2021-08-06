import React, { Component } from "react";

export class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = (col, name) => {
    this.setState({ color: col, model: name });
  };
  render() {
    return (
      <div className="container mt-3">
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={() => this.changeColor("blue", "Dk")}>
          Change color
        </button>
      </div>
    );
  }
}

export default Car;
