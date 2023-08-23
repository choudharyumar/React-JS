import React, { useRef } from "react";

const UncontrolledComp = () => {
  let i1 = useRef(null);
  let i2 = useRef(null);

  function abc(e) {
    e.preventDefault();
    console.log("this is the value", i1.current.value);
    console.log("this is the value", i2.current.value);
    let i3 = document.getElementById("input3").value;
    console.log("this is the value", i3);
  }
  return (
    <div>
      <form onSubmit={abc}>
        <input ref={i1} type="text" />
        <br />
        <br />
        <input ref={i2} type="text" />
        <br />
        <br />
        <input id="input3" type="text" />
        <br />
        <br />
        <button> submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComp;
