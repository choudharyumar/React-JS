import React from "react";
import User from "./User";
const ReuseComp = () => {
  const arr = [
    { name: "umar", class: 5, contact: 1111 },
    { name: "ali", class: 5, contact: 1111 },
    { name: "hamza", class: 5, contact: 3333 },
  ];
  return (
    <div>
      {arr.map((item, i) => (
        <User data={item} />
      ))}
    </div>
  );
};

export default ReuseComp;
