import React from "react";

class CompDidUpdate extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(preprop, prestate, snapshot) {
    console.warn("here is compupdate", prestate.count, this.state.count);
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  render() {
    return (
      <div>
        <h1>here is CompDidUpdate::{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          update{" "}
        </button>
      </div>
    );
  }
}
export default CompDidUpdate;
