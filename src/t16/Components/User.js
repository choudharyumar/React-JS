import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  const { name } = param;
  console.log(name);
  return (
    <div>
      <h1>this is {name}'s page</h1>
    </div>
  );
};

export default User;
