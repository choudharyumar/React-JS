import React, { Component } from "react";
class Abc extends Component {
  constructor() {
    super();
    this.state = {
      //   data: "umar",
      data: 1,
    };
  }
  apple() {
    // this.setState({ data: "ali" });
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button
          onClick={() => {
            this.apple();
          }}
        >
          UpdateData
        </button>
      </div>
    );
  }
}
export default Abc;
