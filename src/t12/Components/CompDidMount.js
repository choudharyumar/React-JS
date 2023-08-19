import React from "react";

class CompDidMount extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "umar",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>here is Component::{this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "khizar" });
          }}
        >
          update by click
        </button>
      </div>
    );
  }
}

export default CompDidMount;
