import React, { PureComponent } from "react";
import PureComp1 from "./PureComp1";

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
        {/* <h1>here is the count::{this.state.count} </h1> */}
        <PureComp1 count={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          update
        </button>
      </div>
    );
  }
}
export default PureComp;
