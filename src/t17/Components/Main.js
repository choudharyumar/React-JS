import React from "react";
import { context1 } from "./Context1";
class Main extends React.Component {
  render() {
    return (
      <context1.Consumer>
        {({ color }) => {
          <h1 style={{ backgroundColor: color }}>hello this is main page</h1>;
        }}
      </context1.Consumer>
    );
  }
}

export default Main;
