import React, { useState } from "react";

const Hoc = () => {
  return (
    <div>
      <h1>HOC</h1>
      {/* <Abc /> */}
      <HOCo cmp={Abc()} />
      <HOCg cmp={Abc()} />
    </div>
  );
};
function HOCo(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: "orange" }}>{props.cmp}</h1>
    </div>
  );
}
function HOCg(props) {
  return (
    <div>
      <h1 style={{ backgroundColor: "green" }}>{props.cmp}</h1>
    </div>
  );
}
function Abc() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>count::{count}</h1>
      <button onClick={() => setcount(count + 1)}>click </button>
    </div>
  );
}

export default Hoc;
