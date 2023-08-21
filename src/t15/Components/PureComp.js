import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.warn("Here is rendering");
    return (
      <div>
        <h1>here is the count::{this.state.count} </h1>
        <button onClick={() => this.setState({ count: 2 })}>update</button>
      </div>
    );
  }
}
export default PureComp;
