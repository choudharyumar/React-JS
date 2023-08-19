import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [data, setdata] = useState(100);
  const [count, setcount] = useState(10);
  useEffect(() => {
    console.log("called with data state");
  }, [data]);

  return (
    <div>
      <h1>data::{data}</h1>
      <button
        onClick={() => {
          setdata(data + 1);
        }}
      >
        update data
      </button>
      <h1>data::{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        update count
      </button>
    </div>
  );
};

export default UseEffect2;
