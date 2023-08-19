import React from "react";

class Stu extends React.Component {
  componentWillUnmount() {
    console.log(" componentWillUnmount");
  }
  render() {
    return (
      <div>
        <h1>Student component</h1>
      </div>
    );
  }
}

export default Stu;
