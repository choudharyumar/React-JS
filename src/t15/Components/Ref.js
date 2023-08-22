import React, { createRef } from "react";

class Ref extends React.Component {
  constructor() {
    super();
    this.input = createRef();
  }
  componentDidMount() {
    console.warn((this.input.current.value = "100"));
  }
  getval() {
    console.warn(this.input.current.value);
    this.input.current.style.color = "orange";
  }
  render() {
    return (
      <div>
        <h1>hello ref</h1>
        <input type="text" ref={this.input}></input>
        <button onClick={() => this.getval()}>click</button>
      </div>
    );
  }
}

export default Ref;
