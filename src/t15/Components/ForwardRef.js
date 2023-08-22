import React, { useRef } from "react";
import User from "./User";

const ForwardRef = () => {
  let input = useRef(null);
  function abc() {
    input.current.value = "100";
  }
  return (
    <div>
      <h1>forward ref in react</h1>
      <User ref={input} />
      <button onClick={() => abc()}>update child</button>
    </div>
  );
};

export default ForwardRef;
