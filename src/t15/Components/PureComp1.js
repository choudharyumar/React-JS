import React, { PureComponent } from "react";

class PureComp1 extends React.Component {
  render() {
    console.warn("Here is child  rendering");
    return (
      <div>
        <h1>here is the count::{this.props.count} </h1>
      </div>
    );
  }
}
export default PureComp1;
