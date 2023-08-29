import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Services/Actions/Action";
const App1 = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Count::{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App1);
