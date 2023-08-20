import React from "react";

const User = (props) => {
  return (
    <div>
      <span>{props.data.name}</span>
      <span>{props.data.class}</span>
      <span>{props.data.contact}</span>
    </div>
  );
};

export default User;
