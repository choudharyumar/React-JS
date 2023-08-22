import React, { useRef } from "react";

const UseRef = () => {
  let input1 = useRef(null);
  function abc() {
    console.warn("calling");
    input1.current.value = "200";
    input1.current.focus();
  }
  return (
    <div>
      <input type="text" ref={input1} />
      <button onClick={() => abc()}>click</button>
    </div>
  );
};

export default UseRef;
