import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setstate] = useState(0);
  useEffect(() => {
    console.log("here is use effect");
  });
  return (
    <div>
      <h1>use effect in react {count}</h1>
      <button
        onClick={() => {
          setstate(count + 1);
        }}
      >
        update{" "}
      </button>
    </div>
  );
};

export default UseEffect1;
