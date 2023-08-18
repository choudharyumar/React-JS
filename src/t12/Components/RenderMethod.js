import React from "react";

class RenderMethod extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "ch@gmail.com",
    };
  }
  render() {
    // console.warn("render method", this.props.name);
    console.log("render method", this.state.email);

    return (
      <div>
        <h1>hello render :: {this.state.email}</h1>
        <button
          onClick={() => {
            this.setState({ email: "ali@gmail.com" });
          }}
        >
          update email
        </button>
      </div>
    );
  }
}

export default RenderMethod;
