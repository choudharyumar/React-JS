import React, { useState } from "react";

class ST extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "umar",
    };
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#d3ebc2",
          margin: 10,
          border: " 4px solid gray",
          borderRadius: "18px",
        }}
      >
        <h1> here is use of prop in a class Component: {this.state.name} </h1>
        <button
          onClick={() => {
            this.setState({ name: "hayat" });
          }}
        >
          Update by click
        </button>
        <h3> Email: {this.props.email} </h3>
      </div>
    );
  }
}

export default ST;
