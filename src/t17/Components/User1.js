import React, { useEffect, useRef } from "react";

const User1 = (props) => {
  const lastValue = useRef();
  useEffect(() => {
    lastValue.current = props.counter;
  });
  const preValue = lastValue.current;
  return (
    <div>
      <h1>current value::{props.counter}</h1>
      <h1>preValue::{preValue}</h1>
      <h1>diff::{props.counter - preValue}</h1>
    </div>
  );
};

export default User1;
