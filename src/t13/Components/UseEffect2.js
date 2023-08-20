import React, { useState, useEffect } from "react";
import User from "./User";

const UseEffect2 = () => {
  const [data, setdata] = useState(100);
  const [count, setcount] = useState(10);
  useEffect(() => {
    console.log("called with data state");
  }, [data]);
  useEffect(() => {
    alert("count is" + count);
  }, [count]);

  return (
    <div>
      <User count={count} data={data} />
      {/* <h1>data::{data}</h1> */}
      <button
        onClick={() => {
          setdata(data + 1);
        }}
      >
        update data
      </button>
      {/* <h1>count::{count}</h1> */}
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
