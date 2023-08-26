import React from "react";
import { context1 } from "./Context1";
import Main from "./Main";
class ContextApi extends React.Component {
  constructor() {
    super();
    this.updateColor = () => {
      this.setState({
        color: "red",
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }
  render() {
    return (
      <div>
        <context1.Provider value={this.state}>
          <Main />
          <h1> common context api </h1>
        </context1.Provider>
      </div>
    );
  }
}

export default ContextApi;
