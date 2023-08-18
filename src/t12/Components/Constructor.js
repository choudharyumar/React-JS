import React from "react";

class Constructor extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "umar",
    };
  }
  render() {
    return (
      <div>
        <h1>hello world {this.state.data}</h1>
      </div>
    );
  }
}

export default Constructor;
