import React from "react";

class ShdCmUpdt extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate() {
    console.log("did");
  }

  shouldComponentUpdate() {
    console.log("should");

    // console.warn("shouldcomponet updatae", this.state.count);
    // if (this.state.count > 5 && this.state.count < 10) {
    //   return true;
    // }
  }
  render() {
    return (
      <div>
        <h1>this is should comp::{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default ShdCmUpdt;
