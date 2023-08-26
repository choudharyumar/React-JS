import React from "react";

const Prop1 = (props) => {
  const { data } = props;
  return (
    <div>
      {/* <h1>{props.data.n}</h1> */}
      <h1>{data.n}</h1>
      <h1>{data.age}</h1>
    </div>
  );
};

export default Prop1;
