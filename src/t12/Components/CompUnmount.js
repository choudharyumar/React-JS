import React from "react";
import Stu from "./Stu";

class Unmount extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.show ? <Stu /> : <h1>component will disappear</h1>}
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default Unmount;
