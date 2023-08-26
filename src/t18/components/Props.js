import React from "react";
import Prop1 from "./Prop1";

const Props = () => {
  const name = "ali";
  return (
    <div>
      {/* <h1></h1> */}
      <Prop1 data={{ n: name, age: 24 }} />
    </div>
  );
};

export default Props;
