import React from "react";

const LiftingState = (props) => {
  let item = "umar hayat";
  return (
    <div>
      <h1>User name:{props.data}</h1>
      <button onClick={() => props.data(item)}>Click Me</button>
    </div>
  );
};

export default LiftingState;
