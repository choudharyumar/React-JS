import React from "react";

const PassFasProp = (props) => {
  return (
    <div>
      <h4>hello Pass Function as Prop</h4>
      <button
        onClick={() => {
          props.data();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default PassFasProp;
