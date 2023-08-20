import React, { useEffect } from "react";

const User = (props) => {
  useEffect(() => {
    console.warn("use effect" + props.count);
  }, [props.count]);
  return (
    <div>
      <h1>count::{props.count}</h1>
      <h1>data::{props.data}</h1>
    </div>
  );
};

export default User;
